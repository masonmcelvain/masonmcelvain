import { evaluate } from "@mdx-js/mdx";
import { render } from "@react-email/render";
import * as jsxRuntime from "react/jsx-runtime";
import { getPostBySlug, type Post } from "@/lib/posts";
import { getEmailComponents, PostEmail } from "./components";
import { SITE_ORIGIN } from "./constants";

export interface PostEmailRender {
   post: Post;
   postUrl: string;
   subject: string;
   html: string;
   text: string;
}

/**
 * Render a blog post's MDX to email-safe HTML. The same MDX source that
 * powers the site is compiled with email variants of the components.
 */
export async function renderPostEmail(
   slug: string,
): Promise<PostEmailRender | null> {
   const post = getPostBySlug(slug);
   if (!post) {
      return null;
   }

   const postUrl = `${SITE_ORIGIN}/blog/${slug}`;
   // Compile with @mdx-js/mdx directly (what next-mdx-remote wraps) so this
   // also runs outside the Next.js bundler, e.g. in the bin/send-post script.
   const { default: MdxContent } = await evaluate(post.content, jsxRuntime);

   const email = (
      <PostEmail post={post} postUrl={postUrl}>
         <MdxContent components={getEmailComponents(postUrl)} />
      </PostEmail>
   );
   const [html, text] = await Promise.all([
      render(email),
      render(email, { plainText: true }),
   ]);

   return { post, postUrl, subject: post.title, html, text };
}

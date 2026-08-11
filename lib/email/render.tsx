import { render } from "@react-email/render";
import { compileMDX } from "next-mdx-remote/rsc";
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
   const { content } = await compileMDX({
      source: post.content,
      components: getEmailComponents(postUrl),
      options: { blockJS: false },
   });

   const email = (
      <PostEmail post={post} postUrl={postUrl}>
         {content}
      </PostEmail>
   );
   const [html, text] = await Promise.all([
      render(email),
      render(email, { plainText: true }),
   ]);

   return { post, postUrl, subject: post.title, html, text };
}

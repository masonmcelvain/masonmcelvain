import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import { getPostBySlug, getAllPostSlugs } from "@/lib/posts";
import { extractToc } from "@/lib/toc";
import { headingLinkComponents } from "@/components/HeadingLink";
import { ImageCarousel } from "@/components/ImageCarousel";
import { ImageWithCaption } from "@/components/ImageWithCaption";
import { TableOfContents } from "@/components/TableOfContents";
import { VideoWithCaption } from "@/components/VideoWithCaption";
import type { Metadata } from "next";

const mdxComponents = {
   ...headingLinkComponents,
   ImageCarousel,
   ImageWithCaption,
   VideoWithCaption,
};

type Props = {
   params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
   const slugs = getAllPostSlugs();
   return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const { slug } = await params;
   const post = getPostBySlug(slug);

   if (!post) {
      return { title: "Post Not Found" };
   }

   return {
      title: post.title,
      description: post.description,
   };
}

export default async function BlogPostPage({ params }: Props) {
   const { slug } = await params;
   const post = getPostBySlug(slug);

   if (!post) {
      notFound();
   }

   const toc = extractToc(post.content);

   return (
      <article>
         <header className="mb-8">
            <h1>{post.title}</h1>
            {post.description && (
               <p className="text-foreground-subtle mt-2 text-lg">
                  {post.description}
               </p>
            )}
            <time className="text-foreground-subtle mt-2 block">
               {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
               })}
            </time>
            <ImageWithCaption
               src={post.image}
               caption={post.imageAlt}
               landscape
               priority
            />
         </header>
         <div className="prose prose-lg prose-a:text-blue-600 prose-headings:scroll-mt-6 dark:prose-invert dark:prose-a:text-blue-400 max-w-none">
            <MDXRemote
               source={post.content}
               components={mdxComponents}
               options={{
                  blockJS: false,
                  mdxOptions: { rehypePlugins: [rehypeSlug] },
               }}
            />
         </div>
         {toc.length >= 2 && <TableOfContents entries={toc} />}
      </article>
   );
}

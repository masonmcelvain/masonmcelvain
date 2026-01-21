import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllPostSlugs } from "@/lib/posts";
import { ImageWithCaption } from "@/components/ImageWithCaption";
import { VideoWithCaption } from "@/components/VideoWithCaption";
import type { Metadata } from "next";

const mdxComponents = {
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

   return (
      <article>
         <header className="mb-8">
            <h1>{post.title}</h1>
            <time className="mt-2 block text-gray-500">
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
         <div className="prose prose-lg prose-a:text-blue-600 max-w-none">
            <MDXRemote source={post.content} components={mdxComponents} />
         </div>
      </article>
   );
}

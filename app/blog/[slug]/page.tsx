import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllPostSlugs } from "@/lib/posts";
import { ImageWithCaption } from "@/components/ImageWithCaption";
import type { Metadata } from "next";

const mdxComponents = {
   ImageWithCaption,
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
            <Image
               src={post.image}
               alt={post.imageAlt}
               width={0}
               height={0}
               sizes="100vw"
               className="mt-6 h-auto max-h-[85vh] w-auto max-w-full rounded-lg lg:mx-auto"
               priority
            />
         </header>
         <div className="prose prose-lg prose-a:text-blue-600 max-w-none">
            <MDXRemote source={post.content} components={mdxComponents} />
         </div>
      </article>
   );
}

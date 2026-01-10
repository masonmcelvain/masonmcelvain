import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllPostSlugs } from "@/lib/posts";
import type { Metadata } from "next";

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
            <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-lg">
               <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60rem, 68.75rem"
                  priority
               />
            </div>
         </header>
         <div className="prose prose-lg prose-a:text-blue-600 max-w-none">
            <MDXRemote source={post.content} />
         </div>
      </article>
   );
}

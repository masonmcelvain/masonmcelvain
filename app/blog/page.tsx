import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
   title: "Blog",
   description: "Thoughts on software, climbing, and more.",
};

export default function BlogPage() {
   const posts = getAllPosts();

   return (
      <>
         <h1>Mason&apos;s blog</h1>
         <ul className="mt-8 space-y-6">
            {posts.map((post) => (
               <li key={post.slug}>
                  <Link
                     href={`/blog/${post.slug}`}
                     className="group flex flex-col gap-4 rounded-lg border border-gray-200 p-6 transition-colors hover:border-gray-400 sm:flex-row sm:items-start"
                  >
                     <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-md sm:w-48">
                        <Image
                           src={post.image}
                           alt={post.imageAlt}
                           fill
                           className="object-cover"
                           sizes="(max-width: 640px) 100vw, 192px"
                        />
                     </div>
                     <div className="flex-1">
                        <h2 className="text-xl font-semibold text-gray-900">
                           {post.title}
                        </h2>
                        <time className="mt-1 block text-sm text-gray-500">
                           {new Date(post.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                           })}
                        </time>
                        {post.description && (
                           <p className="mt-2 text-gray-600">
                              {post.description}
                           </p>
                        )}
                     </div>
                  </Link>
               </li>
            ))}
         </ul>
      </>
   );
}

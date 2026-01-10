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
         <h1>Blog</h1>
         <ul className="mt-8 space-y-6">
            {posts.map((post) => (
               <li key={post.slug}>
                  <Link
                     href={`/blog/${post.slug}`}
                     className="group block rounded-lg border border-gray-200 p-6 transition-colors hover:border-gray-400"
                  >
                     <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">
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
                        <p className="mt-2 text-gray-600">{post.description}</p>
                     )}
                  </Link>
               </li>
            ))}
         </ul>
      </>
   );
}

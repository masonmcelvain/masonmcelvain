import { mediaUrl } from "@/lib/media";
import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
   title: "Mason's blog",
};

export default function BlogPage() {
   const posts = getAllPosts();

   return (
      <main>
         <h1>Mason&apos;s blog</h1>
         <ul className="mt-8 space-y-6">
            {posts.map((post) => (
               <li key={post.slug}>
                  <Link
                     href={`/blog/${post.slug}`}
                     className="group border-border hover:border-border-hover flex flex-col gap-4 rounded-lg border p-6 transition-colors sm:flex-row sm:items-start"
                  >
                     <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-md sm:w-48">
                        <Image
                           src={mediaUrl(post.image)}
                           alt={post.imageAlt}
                           fill
                           className="object-cover"
                           sizes="(max-width: 640px) 100vw, 192px"
                        />
                     </div>
                     <div className="flex-1">
                        <h2 className="text-foreground text-xl font-semibold">
                           {post.title}
                        </h2>
                        <time className="text-foreground-subtle mt-1 block text-sm">
                           {new Date(post.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                           })}
                        </time>
                        {post.description && (
                           <p className="text-foreground-muted mt-2">
                              {post.description}
                           </p>
                        )}
                     </div>
                  </Link>
               </li>
            ))}
         </ul>
      </main>
   );
}

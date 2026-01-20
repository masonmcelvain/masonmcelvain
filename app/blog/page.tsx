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
                           src={mediaUrl(post.image)}
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
         <div className="mt-16 flex flex-col gap-4">
            <details>
               <summary className="font-semibold">
                  Why did you start blogging?
               </summary>
               <p>
                  I started blogging to share my climbing adventures with people
                  I love. It allows me to reflect on my experiences and share
                  photos of places I&apos;ve been and folks I&apos;ve met.
                  I&apos;ve also never really been on social media and as a
                  result I&apos;ve always felt a little disconnected from my
                  friends and family who I don&apos;t get to be with physically
                  on a regular basis. I think social media does us a service in
                  that way, however the benefit is offset by the insidious
                  manipulation that all social media companies succumb to. I
                  also have a self-deprecating habit of comparing myself to
                  others on social media. So I started blogging to better
                  connect with my friends and family on my own terms.
               </p>
            </details>
            <details>
               <summary className="font-semibold">
                  What&apos;s wrong with social media?
               </summary>
               <p>
                  Social media is an &quot;addiction for profit&quot; industry,
                  in the same class of industries as nicotine, gambling, sugar,
                  cannabis, and alcohol. The substances themselves are not
                  necessarily bad and in fact are pleasurable and social for
                  many, however corporations have a financial incentive to get
                  you hooked so they can sell you more of those substances.
                  Blogging is an act of rebellion against social media&apos;s
                  addictive nature and a celebration of the peer-to-peer
                  Internet that connects people in healthy ways.
               </p>
            </details>
         </div>
      </>
   );
}

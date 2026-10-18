import { splashPages, type SplashSlug } from "@data/splash";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { type CSSProperties } from "react";
import rehypeSlug from "rehype-slug";
import { headingLinkComponents } from "@/components/HeadingLink";
import { TableOfContents } from "@/components/TableOfContents";
import { getPageBySlug, type Page } from "@/lib/pages";
import { extractToc } from "@/lib/toc";
import { Callout } from "./Callout";
import { Figure } from "./Figure";
import { LinkCard, LinkCards } from "./LinkCards";
import { SmartLink } from "./SmartLink";
import { Stat, Stats } from "./Stats";
import { Timeline, TimelineItem } from "./Timeline";

const mdxComponents = {
   ...headingLinkComponents,
   a: SmartLink,
   Callout,
   Figure,
   LinkCard,
   LinkCards,
   Stat,
   Stats,
   Timeline,
   TimelineItem,
};

// The splash routes are fixed, so a missing content file is a build error
// rather than a 404.
function getSplashContent(slug: SplashSlug): Page {
   const page = getPageBySlug(slug);
   if (!page) {
      throw new Error(`Missing content/pages/${slug}.mdx for /${slug}`);
   }
   return page;
}

export function splashMetadata(slug: SplashSlug): Metadata {
   const { title, description } = getSplashContent(slug);
   const { heroImage, heroAlt } = splashPages[slug];
   const images = [
      {
         url: heroImage.src,
         width: heroImage.width,
         height: heroImage.height,
         alt: heroAlt,
      },
   ];

   return {
      title,
      description,
      alternates: { canonical: `/${slug}` },
      openGraph: {
         title,
         description,
         type: "article",
         url: `/${slug}`,
         images,
      },
      twitter: {
         card: "summary_large_image",
         title,
         description,
         images,
      },
   };
}

type SplashPageProps = {
   slug: SplashSlug;
};

export function SplashPage({ slug }: SplashPageProps) {
   const { title, description, content } = getSplashContent(slug);
   const {
      gradientFrom,
      gradientTo,
      accentFrom,
      accentTo,
      heroImage,
      heroAlt,
   } = splashPages[slug];
   const toc = extractToc(content);
   const accentStyle: CSSProperties & Record<`--${string}`, string> = {
      "--accent-from": accentFrom,
      "--accent-to": accentTo,
   };

   return (
      <main>
         <article style={accentStyle}>
            <header className="mb-8">
               <div
                  className={`flex justify-center rounded-lg bg-linear-to-tl p-8 ${gradientFrom} ${gradientTo}`}
               >
                  <Image
                     src={heroImage}
                     alt={heroAlt}
                     preload
                     sizes="(min-width: 640px) 448px, 336px"
                     className="h-[225px] w-auto max-w-full object-contain sm:h-[300px]"
                  />
               </div>
               <h1 className="mt-8 inline-block bg-[linear-gradient(to_right,var(--accent-from),var(--accent-to))] bg-[length:100%_3px] bg-bottom bg-no-repeat pb-1">
                  {title}
               </h1>
               <p className="text-foreground-subtle mt-2 text-lg">
                  {description}
               </p>
            </header>
            <div className="prose prose-lg prose-a:text-blue-600 prose-headings:scroll-mt-6 dark:prose-invert dark:prose-a:text-blue-400 max-w-none">
               <MDXRemote
                  source={content}
                  components={mdxComponents}
                  options={{
                     blockJS: false,
                     mdxOptions: { rehypePlugins: [rehypeSlug] },
                  }}
               />
            </div>
            {toc.length >= 2 && <TableOfContents entries={toc} />}
         </article>
      </main>
   );
}

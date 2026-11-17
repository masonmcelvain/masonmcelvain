import { splashSlugs } from "@data/splash";
import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
   return [
      { url: SITE_URL },
      { url: `${SITE_URL}/blog` },
      ...getAllPosts().map((post) => ({
         url: `${SITE_URL}/blog/${post.slug}`,
         lastModified: post.date,
      })),
      ...splashSlugs.map((slug) => ({ url: `${SITE_URL}/${slug}` })),
   ];
}

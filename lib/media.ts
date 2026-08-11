const ORIGIN = "https://media.masonmcelvain.com";

export function mediaUrl(src: string) {
   return src.startsWith("http") ? src : new URL(src, ORIGIN).href;
}

/**
 * Stable fragment id for a video, derived from its source path so the site
 * component and the email version's link agree.
 */
export function videoAnchorId(src: string) {
   const fileName =
      src
         .split("/")
         .pop()
         ?.replace(/\.[^.]+$/, "") ?? src;
   const slug = fileName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
   return `video-${slug}`;
}

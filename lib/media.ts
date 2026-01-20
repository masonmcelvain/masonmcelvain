const ORIGIN = "https://media.masonmcelvain.com";

export function mediaUrl(src: string) {
   return src.startsWith("http") ? src : new URL(src, ORIGIN).href;
}

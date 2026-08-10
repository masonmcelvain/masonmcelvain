import GithubSlugger from "github-slugger";

export type TocEntry = {
   id: string;
   text: string;
   depth: number;
};

const HEADING_PATTERN = /^(#{1,6})\s+(.+?)\s*#*\s*$/;
const CODE_FENCE_PATTERN = /^(`{3,}|~{3,})/;

/** Reduce inline markdown to the plain text rehype-slug sees when slugging. */
function stripInlineMarkdown(text: string): string {
   return text
      .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1") // images -> alt text
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1") // links -> link text
      .replace(/`([^`]+)`/g, "$1") // inline code
      .replace(/(\*\*|__)(.+?)\1/g, "$2") // bold
      .replace(/(\*|_)(.+?)\1/g, "$2"); // italic
}

/**
 * Extract h1-h3 headings from raw MDX content with ids matching the ones
 * rehype-slug assigns at render time. All heading depths are fed to the
 * slugger so duplicate-name counters stay in sync with rehype-slug, which
 * slugs every heading.
 */
export function extractToc(content: string): TocEntry[] {
   const slugger = new GithubSlugger();
   const entries: TocEntry[] = [];
   let inCodeFence = false;

   for (const line of content.split("\n")) {
      if (CODE_FENCE_PATTERN.test(line.trimStart())) {
         inCodeFence = !inCodeFence;
         continue;
      }
      if (inCodeFence) {
         continue;
      }

      const match = HEADING_PATTERN.exec(line);
      if (!match) {
         continue;
      }

      const depth = match[1].length;
      const text = stripInlineMarkdown(match[2]);
      const id = slugger.slug(text);
      if (depth <= 3) {
         entries.push({ id, text, depth });
      }
   }

   return entries;
}

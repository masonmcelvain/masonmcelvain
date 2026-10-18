import fs from "fs";
import path from "path";
import matter from "gray-matter";

const pagesDirectory = path.join(process.cwd(), "content/pages");

export interface PageFrontmatter {
   title: string;
   description: string;
}

export interface Page extends PageFrontmatter {
   slug: string;
   content: string;
}

export function getPageBySlug(slug: string): Page | null {
   const fullPath = path.join(pagesDirectory, `${slug}.mdx`);

   if (!fs.existsSync(fullPath)) {
      return null;
   }

   const fileContents = fs.readFileSync(fullPath, "utf8");
   const { data, content } = matter(fileContents);

   for (const field of ["title", "description"] as const) {
      if (typeof data[field] !== "string" || data[field].trim() === "") {
         throw new Error(
            `content/pages/${slug}.mdx: frontmatter "${field}" must be a non-empty string`,
         );
      }
   }

   return {
      slug,
      title: data.title,
      description: data.description,
      content,
   };
}

export function getAllPageSlugs(): string[] {
   const fileNames = fs.readdirSync(pagesDirectory);
   return fileNames
      .filter((fileName) => fileName.endsWith(".mdx"))
      .map((fileName) => fileName.replace(/\.mdx$/, ""));
}

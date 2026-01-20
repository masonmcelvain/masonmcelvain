import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface PostFrontmatter {
   title: string;
   date: string;
   description?: string;
   image: string;
   imageAlt: string;
}

export interface PostMeta extends PostFrontmatter {
   slug: string;
}

export interface Post extends PostMeta {
   content: string;
}

export function getAllPosts(): PostMeta[] {
   const fileNames = fs.readdirSync(postsDirectory);
   const posts = fileNames
      .filter((fileName) => fileName.endsWith(".mdx"))
      .map((fileName) => {
         const slug = fileName.replace(/\.mdx$/, "");
         const fullPath = path.join(postsDirectory, fileName);
         const fileContents = fs.readFileSync(fullPath, "utf8");
         const { data } = matter(fileContents);

         return {
            slug,
            title: data.title,
            date: data.date,
            description: data.description,
            image: data.image,
            imageAlt: data.imageAlt,
         };
      });

   return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
   const fullPath = path.join(postsDirectory, `${slug}.mdx`);

   if (!fs.existsSync(fullPath)) {
      return null;
   }

   const fileContents = fs.readFileSync(fullPath, "utf8");
   const { data, content } = matter(fileContents);

   return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
      image: data.image,
      imageAlt: data.imageAlt,
      content,
   };
}

export function getAllPostSlugs(): string[] {
   const fileNames = fs.readdirSync(postsDirectory);
   return fileNames
      .filter((fileName) => fileName.endsWith(".mdx"))
      .map((fileName) => fileName.replace(/\.mdx$/, ""));
}

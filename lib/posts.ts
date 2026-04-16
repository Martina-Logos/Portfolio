import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

// Get all posts (for listing / static params)
export function getAllPosts() {
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");

      const fullPath = path.join(postsDirectory, file);
      const fileContent = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContent);

      return {
        slug,
        title: data.title || "",
        excerpt: data.excerpt || "",
        category: data.category || "",
        date: data.date || "",
        readTime: data.readTime || "",
      };
    });
}

// Get a single post by slug
export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) return null;

  const fileContent = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    content,
    title: data.title || "",
    excerpt: data.excerpt || "",
    category: data.category || "",
    date: data.date || "",
    readTime: data.readTime || "",
  };
}
import fs from "fs";
import matter from "gray-matter";
import path from "path";

import markdownToHtml from "@/lib/toHtml";

type Work = {
  slug: string;
  content: string;
  title: string;
  date: string;
  url?: string;
  image: string;
};

const worksDirectory = path.join(process.cwd(), "content", "works");

export function getWorkSlugs() {
  const allDirents = fs.readdirSync(worksDirectory, { withFileTypes: true });
  return allDirents
    .filter((dirent) => dirent.isFile())
    .map(({ name }) => name.slice(0, -3));
}

/**
 * 指定したフィールド名から、記事のフィールドの値を取得する
 */
export function getWorkBySlug(slug: string, fields: string[] = []) {
  const fullPath = path.join(worksDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: Work = {
    slug: "",
    content: "",
    title: "",
    date: "",
    url: "",
    image: "",
  };

  fields.forEach(async (field) => {
    if (field === "slug") {
      items[field] = slug;
    }
    if (field === "content") {
      items[field] = await markdownToHtml(content);
    }
    if (field === "title" || field === "date" || field === "url" || field === "image") {
      items[field] = data[field];
    }
  });
  return items;
}

/**
 * すべての記事について、指定したフィールドの値を取得して返す
 * @param fields 取得するフィールド
 */
export function getAllWorks(fields: string[] = []) {
  const slugs = getWorkSlugs();
  const works = slugs
    .map((slug) => getWorkBySlug(slug, fields))
    .sort((a, b) => (a.date > b.date ? -1 : 1));
  return works;
}
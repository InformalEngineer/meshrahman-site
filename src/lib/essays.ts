import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const ESSAYS_DIR = path.join(process.cwd(), "content", "essays");

export type EssayMeta = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  readingTime: number;
  migrated?: boolean;
  sourceSlug?: string;
};

export type Essay = EssayMeta & { contentHtml: string };

export function getAllEssays(): EssayMeta[] {
  if (!fs.existsSync(ESSAYS_DIR)) return [];
  return fs
    .readdirSync(ESSAYS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(ESSAYS_DIR, f), "utf8");
      const { data, content } = matter(raw);
      return {
        slug: f.replace(/\.md$/, ""),
        title: data.title as string,
        date: data.date as string,
        tags: (data.tags as string[]) ?? [],
        excerpt: (data.excerpt as string) ?? "",
        readingTime:
          (data.readingTime as number) ??
          Math.max(1, Math.round(content.split(/\s+/).length / 220)),
        migrated: Boolean(data.migrated),
        sourceSlug: data.sourceSlug as string | undefined,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getEssay(slug: string): Promise<Essay> {
  const raw = fs.readFileSync(path.join(ESSAYS_DIR, `${slug}.md`), "utf8");
  const { data, content } = matter(raw);
  const processed = await remark().use(html).process(content);
  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    tags: (data.tags as string[]) ?? [],
    excerpt: (data.excerpt as string) ?? "",
    readingTime:
      (data.readingTime as number) ??
      Math.max(1, Math.round(content.split(/\s+/).length / 220)),
    migrated: Boolean(data.migrated),
    sourceSlug: data.sourceSlug as string | undefined,
    contentHtml: processed.toString(),
  };
}

export const ESSAY_TAGS = ["money", "career", "adhd", "experiments", "builds"] as const;

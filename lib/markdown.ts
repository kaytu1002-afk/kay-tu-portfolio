import fs from "node:fs";
import path from "node:path";
import type { Locale, ProjectSlug } from "@/lib/site-data";

export type ProjectDocument = {
  meta: Record<string, string>;
  sections: { title: string; paragraphs: string[]; bullets: string[] }[];
};

export function getProjectDocument(locale: Locale, slug: ProjectSlug): ProjectDocument {
  const file = path.join(process.cwd(), "content", "projects", `${slug}.${locale}.md`);
  const source = fs.readFileSync(file, "utf8").replace(/\r/g, "");
  const [frontmatter, ...rest] = source.split("---").slice(1);
  const meta = Object.fromEntries(frontmatter.trim().split("\n").map((line) => {
    const split = line.indexOf(":");
    return [line.slice(0, split).trim(), line.slice(split + 1).trim()];
  }));
  const body = rest.join("---").trim();
  const sections = body.split(/^## /m).slice(1).map((block) => {
    const [title, ...lines] = block.trim().split("\n");
    const bullets = lines.filter((line) => line.startsWith("- ")).map((line) => line.slice(2));
    const paragraphs = lines.join("\n").split(/\n\s*\n/).map((p) => p.replace(/\n/g, " ").trim()).filter((p) => p && !p.startsWith("- "));
    return { title: title.trim(), paragraphs, bullets };
  });
  return { meta, sections };
}

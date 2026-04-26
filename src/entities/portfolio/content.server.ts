import { readFile } from "node:fs/promises";
import path from "node:path";
import { learningContentMap, projectContentMap } from "./content-map";

async function readMarkdown(relativePath?: string): Promise<string | undefined> {
  if (!relativePath) {
    return undefined;
  }

  const absolutePath = path.join(process.cwd(), "src", "content", relativePath);

  try {
    return await readFile(absolutePath, "utf8");
  } catch {
    return undefined;
  }
}

export async function getProjectMarkdownContent(slug: string): Promise<string | undefined> {
  return readMarkdown(projectContentMap[slug]);
}

export async function getLearningMarkdownContent(slug: string): Promise<string | undefined> {
  return readMarkdown(learningContentMap[slug]);
}

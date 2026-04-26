type DetailLike = {
  title: string;
  description?: string;
  features?: string[];
  topics?: string[];
  achievements?: string[];
  technologies?: string[];
};

function toBulletList(items: string[] | undefined): string {
  if (!items || items.length === 0) {
    return "- Content will be updated soon.";
  }

  return items.map((item) => `- ${item}`).join("\n");
}

export function buildFallbackMarkdown(detail: DetailLike): string {
  return `## Overview

${detail.description ?? `${detail.title} details are being curated.`}

## Key Points

${toBulletList(detail.features ?? detail.topics ?? detail.achievements)}

## Technologies

${toBulletList(detail.technologies)}
`;
}

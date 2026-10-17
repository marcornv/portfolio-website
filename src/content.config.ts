import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// One Markdown file per project in src/content/projects/.
// If a field is missing or has the wrong type, `npm run build` stops and says which file is wrong.
const projects = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().max(160),
      repo: z.url(),
      demo: z.url().optional(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      tags: z.array(z.string()).default([]),
      // Lower numbers are shown first.
      order: z.number().default(100),
      // Set to true to hide a project without deleting it.
      draft: z.boolean().default(false),
    }),
});

// The About section: src/content/about/about.md
const about = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/about" }),
  schema: z.object({
    location: z.string().optional(),
    skills: z.array(
      z.object({
        group: z.string(),
        items: z.array(z.string()),
      }),
    ),
  }),
});

export const collections = { projects, about };

import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    keywords: z.string().optional(),
    readingTime: z.number(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const pilotTraining = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/pilot-training",
  }),
  schema: ({ image }) =>
    z.object({
      siteTitle: z.string(),
      siteDescription: z.string(),
      keywords: z.string(),
      city: z.string(),
      stateShort: z.string(),
      stateLong: z.string(),
      airportLocation: z.string(),
      keyPlace1: z.string(),
      keyPlace2: z.string(),
      distance: z.string(),
      headlines: z.array(z.string()),
    }),
});

export const collections = {
  blog: blogCollection,
  "pilot-training": pilotTraining,
};

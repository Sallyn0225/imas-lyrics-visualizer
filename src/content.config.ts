import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const lyrics = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/lyrics" }),
  schema: z.object({
    title: z.string(),
    brand: z.string(),
    team: z.string().optional(),
    themeColor: z.string().default("#ff699e"),
    cover: z.string(),
    audio: z.string(),
    layoutType: z.string().default("standard"),
  }),
});

export const collections = { lyrics };

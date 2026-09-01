import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const BLOCK_TYPES = [
  'hero',
  'overview',
  'comparison',
  'pillars',
  'members-preview',
  'outputs-preview',
  'cta',
] as const;

const REGIONS = ['tw', 'uk', 'jp', 'cross'] as const;

const home = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/home' }),
  schema: z.object({
    order: z.number(),
    block: z.enum(BLOCK_TYPES),
    eyebrow: z.string().optional(),
    title: z.string(),
    subtitle: z.string().optional(),
    items: z
      .array(
        z.object({
          title: z.string(),
          desc: z.string().optional(),
          value: z.string().optional(),
          unit: z.string().optional(),
          region: z.enum(REGIONS).optional(),
        }),
      )
      .optional(),
    cta: z.object({ label: z.string(), to: z.string() }).optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    eyebrow: z.string().optional(),
    lead: z.string().optional(),
  }),
});

const outputs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/outputs' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    authors: z.array(z.string()),
    tags: z.array(z.string()),
    category: z.enum(['paper', 'report', 'dataset', 'event']),
    region: z.enum(REGIONS),
    venue: z.string().optional(),
    doi: z.string().optional(),
  }),
});

const members = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/members' }),
  schema: z.object({
    members: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        role: z.string(),
        affiliation: z.string(),
        country: z.enum(['tw', 'uk', 'jp']),
        bio: z.string(),
        tags: z.array(z.string()).default([]),
      }),
    ),
  }),
});

export const collections = { home, pages, outputs, members };
export { BLOCK_TYPES, REGIONS };

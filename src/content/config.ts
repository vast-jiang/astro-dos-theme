import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // 强制转换为日期对象
    date: z.coerce.date(),
    // 可选：草稿状态
    draft: z.boolean().optional(),
  }),
});

export const collections = { blog };
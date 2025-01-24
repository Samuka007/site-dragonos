import { date } from "astro/zod";
import { defineCollection, z } from "astro:content";

const postCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      coverImage: image(),
      date: date(),
      categories: z.array(z.string()),
    }),
});

export const collections = {
  post: postCollection,
};

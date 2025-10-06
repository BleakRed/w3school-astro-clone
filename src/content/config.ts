import { z, defineCollection } from "astro:content";

const lessonCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(["html", "python"]),
    order: z.number(),
    quiz: z.array(
      z.object({
        question: z.string(),
        options: z.array(z.string()),
        answer: z.number() // index of correct option
      })
    ).optional(),
  }),
});

export const collections = {
  lessons: lessonCollection,
};

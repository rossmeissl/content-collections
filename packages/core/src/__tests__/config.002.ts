import { defineCollection, defineConfig } from "@content-collections/core";

const posts = defineCollection({
  name: "posts",
  schema: z => z.object({
    title: z.string(),
  }),
  directory: "sources/posts",
  include: "**/*.md(x)?",
});

export default defineConfig({
  collections: [posts],
});

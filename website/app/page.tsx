import { CheckCircle2, Type } from "lucide-react";
import { Hero } from "./components/Hero";
import { SourceCode } from "@/components/SourceCode";
import { ReactNode } from "react";
import { HmrSection } from "./components/HmrSection";
import { TypeSafeApiSection } from "./components/TypeSafeApiSection";

const simleTypeSafeAPI = `
import { allPosts } from "content-collections";

export function Posts() {
  return (
    <ul>
      {allPosts.map((post) => (
        <li key={post.slug}>
          <p>{post./* ts-prompt:title|*summary|description|slug */}</p>
        </li>
      ))}
    </ul>
  );
}
`;

const powerfulValidation = `
const authors = defineCollection({
  name: "authors",
  directory: "src/authors",
  include: "**/*.md",
  schema: (z) => ({ // [!code highlight]
    id: z.positive(), // [!code highlight]
    email: z.string().email(), // [!code highlight]
    displayName: z.string().min(1).max(120), // [!code highlight]
    birthday: z.string().regex(/\\d{4}-\\d{2}-\\d{2}/), // [!code highlight]
  }), // [!code highlight]
});
`;

const transformation = `
const authors = defineCollection({
  name: "authors",
  directory: "src/authors",
  include: "**/*.md",
  schema: (z) => ({
    id: z.string(),
    bio: z.string().url(),
  }),
  transform: async (ctx, author) => { // [!code highlight]
    const resp = await fetch(author.bio); // [!code highlight]
    return { // [!code highlight]
      ...author, // [!code highlight]
      bio: await resp.text(), // [!code highlight]
    }; // [!code highlight]
  }, // [!code highlight]
});
`;

type FeatureProps = {
  title: string;
  children: ReactNode;
};

function Feature({ title, children }: FeatureProps) {
  return (
    <div className="border p-5 rounded-md border-slate-800 bg-slate-800 shadow-md">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <CheckCircle2 className="inline-block mr-2 text-primary" />
        <span>{title}</span>
      </h2>
      <p className="">{children}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <HmrSection />
      <TypeSafeApiSection />
      <div className="px-10 grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 max-w-5xl mx-auto">
        <SourceCode lang="ts" lineHighlighter>
          {powerfulValidation}
        </SourceCode>
        <Feature title="Powerful Validation">
          Content Collection uses zod to validate your content. This means you
          can use all the power of zod to validate your content.
        </Feature>
        <SourceCode lang="ts" lineHighlighter>
          {transformation}
        </SourceCode>
        <Feature title="Transformation">
          Transform your content as you like.
        </Feature>
      </div>
    </main>
  );
}

import { Editor } from "@/components/Editor";
import { commentComponentTransformer } from "@/components/commentComponentTransformer";
import { codeToJsx } from "@/lib/codeToJsx";
import { CheckCircle2 } from "lucide-react";
import { CodeMotion } from "./CodeMotion";
import { Content, Section, Title } from "./Section";

const code = `const samples = defineCollection({
  name: "samples",
  directory: "src/samples",
  include: "**/*.md",
  schema: (z) => ({
    /* cmp-line:codemotion */
  }),
});
`;

const simple = `const simple = {
    name: z.string().min(1).max(120),
    description: z.string().optional(),
  }`;

const post = `const post = {
    title: z.string().min(20).max(160),
    summary: z.string().optional(),
    draft: z.boolean(),
    publishedAt: z.string().regex(/\\d{4}-\\d{2}-\\d{2}/),
  }`;

const author = `const author = {
    id: z.number().positive(),
    email: z.string().email(),
    displayName: z.string().min(1).max(120),
    birthday: z.string().regex(/\\d{4}-\\d{2}-\\d{2}/),
  }`;

const sampleCode = [simple, post, author];

export async function ValidationSection() {
  const samples = await Promise.all(
    sampleCode.map((sample) =>
      codeToJsx(sample.trim(), {
        lang: "ts",
        type: "inline",
        log: false,
        removeFirstLine: true,
        removeLastLine: true,
      })
    )
  );

  const api = await codeToJsx(code, {
    lang: "ts",
    log: false,
    transformers: [
      commentComponentTransformer({
        codemotion: <CodeMotion>{samples}</CodeMotion>,
      }),
    ],
  });

  return (
    <Section>
      <Content className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <Editor className="order-2 md:order-none h-[21rem]">
          {api}
        </Editor>
        <div className="flex flex-col gap-5">
          <Title>Powerful Validation</Title>
          <p>
            Content Collections will validate your content against your defined
            schema. No document will be added to your collection if it does not
            match the schema. The schema is powered by Zod, so you can use all
            the power of Zod to validate your content.
          </p>
          <p>
            During development Content Collection will warn about invalid
            content, but it will not fail the build. This allows you to fix the
            content in your development environment.
          </p>
          <p>
            At build time Content Collection will fail the build if there is any
            invalid content. This ensures that your production build will not
            contain any invalid content.
          </p>
        </div>
      </Content>
    </Section>
  );
}

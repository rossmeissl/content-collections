import { Content, Section, Title } from "./Section";
import { codeToJsx } from "@/lib/codeToJsx";
import { TransformationPreviewer } from "./TransformationPreviewer";
import { Sample, sampleSources } from "./TransformationSamples";

async function mapSample(sample: Sample) {
  return {
    ...sample,
    code: await codeToJsx(sample.code.trim(), {
      lang: "ts",
    }),
  };
}

export async function TransformationSection() {
  const samples = await Promise.all(sampleSources.map(mapSample));
  return (
    <Section backgroundGrid>
      <Content>
        <Title center>Transformation</Title>
        <p className="text-lg max-w-2xl text-center mx-auto">
          Content Collection does not transform or compile content for you.
          Instead, it provides a powerful transformation API that allows you to
          transform your content in any way you like.
        </p>
        <TransformationPreviewer samples={samples} />
        <p className="mt-5 mx-auto max-w-xl text-center">
          These are just a few examples of what is possible with the transform
          function. For more examples, take a look at our documentation.
        </p>
      </Content>
    </Section>
  );
}

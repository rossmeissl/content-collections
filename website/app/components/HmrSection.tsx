import { Editor } from "@/components/Editor";
import { codeToJsx } from "@/lib/codeToJsx";
import { CheckCircle2 } from "lucide-react";
import { HmrInAction } from "./HmrInAction";
import { Content, Section, Title } from "./Section";

const frontmatterSource = `---
title: "Beautiful DX"
description: "A beautiful developer experience"
author: "Sebastian Sdorra"
published: true
---
`;

function Preview() {
  return (
    <div className="absolute top-0 bottom-0 flex items-start md:items-center right-0">
      <div className="bg-slate-700/90 font-sans border border-slate-400/50 rounded-md shadow-md p-5 w-72 md:w-96 flex flex-col">
        <header className="font-bold text-2xl">Beautiful DX</header>
        <div className="flex-grow my-5 flex gap-1.5">
          <span>HMR for content is</span>
          <span id="hmr-target"></span>
        </div>
        <footer className="self-end text-sm text-slate-400">
          Sebastian Sdorra
        </footer>
      </div>
    </div>
  );
}

export async function HmrSection() {
  const frontmatter = await codeToJsx(frontmatterSource, {
    lang: "yaml",
  });
  return (
    <Section className="mt-10" backgroundGrid>
      <Content>
        <Title center>Beautiful DX</Title>
        <p className="text-lg max-w-2xl text-center mx-auto">
          Content Collections is designed to provide a pleasurable user
          experience. It offers a seamless developer experience without the need
          to restart the server or refresh the browser. Content collections are
          automatically updated when you make changes to your content.
        </p>
        <div className="relative pt-24 pr-8 md:pt-0 lg:pr-0 my-10">
          <Editor className="max-w-3xl">
            {frontmatter}
            <div className="mt-5 flex gap-1.5">
              <span>HMR for content is</span>
              <span id="hmr-source"></span>
            </div>
            <Preview />
          </Editor>
        </div>
        <HmrInAction />
      </Content>
    </Section>
  );
}

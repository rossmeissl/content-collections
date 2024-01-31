import { Editor } from "@/components/Editor";
import { codeToJsx } from "@/lib/codeToJsx";
import { CheckCircle2 } from "lucide-react";
import { HmrInAction } from "./HmrInAction";

const frontmatterSource = `---
title: "Beautiful DX"
description: "A beautiful developer experience"
author: "Sebastian Sdorra"
published: true
---
`;

function Preview() {
  return (
    <div className="absolute top-0 bottom-0 flex items-center right-0">
      <div className="bg-slate-700 font-sans border border-slate-400/50 rounded-md shadow-md p-5 w-96 flex flex-col">
        <header className="font-bold text-2xl">Beautiful DX</header>
        <main className="flex-grow my-5 flex gap-1.5">
          <span>HMR for content is</span>
          <span id="hmr-target"></span>
        </main>
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
    <section className="p-10">
      <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
        <CheckCircle2 className="inline-block mr-2 text-primary" />
        <span>Beautiful DX</span>
      </h2>
      <div className="relative">
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
    </section>
  );
}

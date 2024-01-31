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
    <div className="absolute top-0 bottom-0 flex items-start md:items-center right-0">
      <div className="bg-slate-700/90 font-sans border border-slate-400/50 rounded-md shadow-md p-5 w-72 md:w-96 flex flex-col">
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
    <section className="relative p-10 mt-10">
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full text-slate-500/40 [mask-image:radial-gradient(black,transparent)]"
      >
        <defs>
          <pattern
            id="rectangles"
            width="64"
            height="64"
            patternUnits="userSpaceOnUse"
            x="50%"
            patternTransform="translate(0 80)"
          >
            <path d="M0 128V.5H128" fill="none" stroke="currentColor"></path>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#rectangles)"></rect>
      </svg>
      <div className="absolute inset-0 " />
      <div className="relative max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 flex items-center justify-center">
          <CheckCircle2 className="inline-block mr-2 size-8 text-primary" />
          <span>Beautiful DX</span>
        </h2>
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
      </div>
    </section>
  );
}

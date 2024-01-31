import { toJsxRuntime } from "hast-util-to-jsx-runtime";
//@ts-ignore
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import {
  BundledLanguage,
  BundledTheme,
  CodeToHastOptions,
  codeToHast,
} from "shiki";

type Options = Omit<CodeToHastOptions<BundledLanguage, BundledTheme>, "theme">;

export async function codeToJsx(code: string | string[], options: Options) {
  let sourceCode = "";
  if (Array.isArray(code)) {
    sourceCode = code.join("\n");
  } else {
    sourceCode = code;
  }

  const tree = await codeToHast(sourceCode, {
    ...options,
    theme: "github-dark-dimmed",
  });

  return toJsxRuntime(tree, {
    Fragment,
    jsx,
    jsxs,
  });
}

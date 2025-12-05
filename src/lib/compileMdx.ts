import { compile } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";

export async function compileMDX(source: string) {
  const compiled = await compile(source, {
    outputFormat: "function-body",
    development: false,
  });

  const code = String(compiled);

  const Component = new Function(
    "React",
    "jsx",
    "jsxs",
    "Fragment",
    `${code}; return MDXContent;`
  )(runtime, runtime.jsx, runtime.jsxs, runtime.Fragment);

  return Component;
}

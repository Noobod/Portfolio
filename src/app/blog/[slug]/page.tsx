import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { compile } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // ⬅ REQUIRED in Next.js 15/16

  const filePath = path.join(process.cwd(), "src/content/posts", `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return notFound();

  const raw = fs.readFileSync(filePath, "utf8");
  const { content } = matter(raw);

  const compiled = String(
    await compile(content, { outputFormat: "function-body" })
  );

  const MDXComponent = new Function(String(compiled))({
    ...runtime,
  }).default;

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 text-white">
      <article className="prose prose-invert max-w-3xl mx-auto">
        <MDXComponent />
      </article>
    </div>
  );
}

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { compile } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), "src/content/posts", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return notFound();

  const raw = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(raw);

  const compiled = String(
    await compile(content, { outputFormat: "function-body" })
  );

  const MDXComponent = new Function(String(compiled))({
    ...runtime,
  }).default;

  const title = (data?.title as string) ?? "";

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-3xl px-6 pt-32 pb-20">
        {/* Optional: show frontmatter title centered */}
        {title ? (
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
            {title}
          </h1>
        ) : null}

        {/* MDX content */}
        <article className="prose prose-invert max-w-none">
          <MDXComponent />
        </article>
      </div>
    </main>
  );
}

import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: BlogPostProps) {
  // ⬅️ NEW: unwrap the Promise
  const { slug } = await params;

  const filePath = path.join(
    process.cwd(),
    "src/app/blog/posts",
    `${slug}.mdx`
  );

  if (!fs.existsSync(filePath)) return notFound();

  const file = fs.readFileSync(filePath, "utf-8");

  const { content } = await compileMDX<any>({
    source: file,
    mdxOptions: { parseFrontmatter: true },
  });

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-gradient-to-b from-black via-[#0b0b12] to-black text-white">
      <article className="prose prose-invert max-w-3xl mx-auto prose-h1:text-white prose-h2:text-purple-300 prose-p:text-gray-300">
        {content}
      </article>
    </div>
  );
}

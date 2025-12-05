import fs from "fs";
import path from "path";
import Link from "next/link";

export default function BlogPreview() {
  const postsDir = path.join(process.cwd(), "src/content/posts");

  const posts = fs.readdirSync(postsDir).map((file) => ({
    slug: file.replace(".mdx", ""),
    title: file
      .replace(".mdx", "")
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase()),
  }));

  return (
    <section id="blog" className="py-20 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">
        Latest Blog 
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {posts.slice(0, 2).map(({ slug, title }) => (
          <Link
            key={slug}
            href={`/blog/${slug}`}
            className="block border border-white/10 p-5 rounded-lg hover:border-purple-500/50 transition text-center"
          >
            <h3 className="text-lg font-semibold hover:text-purple-400">{title}</h3>
          </Link>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          href="/blog"
          className="inline-block px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition"
        >
          View All Posts →
        </Link>
      </div>
    </section>
  );
}

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function BlogPage() {
  const postsDir = path.join(process.cwd(), "src/content/posts");

  // Read all MDX files
  const posts = fs.readdirSync(postsDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(postsDir, file);
      const raw = fs.readFileSync(filePath, "utf8");
      const { data } = matter(raw);

      return {
        slug: file.replace(".mdx", ""),
        title: data.title || file.replace(".mdx", ""),
        date: data.date ? new Date(data.date) : new Date(0),
      };
    })
    // Sort by latest date first
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-gradient-to-b from-black via-[#0b0b12] to-black text-white">
      <div className="max-w-3xl mx-auto">
        
        <h1 className="text-4xl font-bold text-center mb-4">
          Blog & Case Studies
        </h1>

        <p className="text-gray-400 text-center mb-12">
          Case studies, dev thoughts & lessons from building real systems.
        </p>

        <div className="space-y-4">
          {posts.map(({ slug, title }) => (
            <Link
              key={slug}
              href={`/blog/${slug}`}
              className="block border border-white/10 rounded-xl px-6 py-5 hover:border-purple-500/50 hover:shadow-lg transition group"
            >
              <h2 className="text-xl font-semibold group-hover:text-purple-400 transition">
                {title}
              </h2>
              <p className="text-gray-500 text-sm mt-1">Click to read →</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

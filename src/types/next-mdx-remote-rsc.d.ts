declare module "next-mdx-remote/rsc" {
  interface CompileMDXOptions {
    mdxOptions?: {
      parseFrontmatter?: boolean;
      remarkPlugins?: any[];
      rehypePlugins?: any[];
      [key: string]: any;
    };
  }
}

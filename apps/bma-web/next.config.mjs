import createMDX from "@next/mdx";

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  eslint: { ignoreDuringBuilds: true },
};

export default withMDX(nextConfig);

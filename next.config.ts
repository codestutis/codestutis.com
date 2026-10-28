import createMDX from "@next/mdx";
import { resolve } from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  turbopack: {
    rules: {
      "*.toml": {
        loaders: [resolve("content/toml-loader.cjs")],
        as: "*.js",
      },
    },
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-gfm", "remark-math"],
    rehypePlugins: [
      [
        "rehype-katex",
        {
          strict: "warn",
          trust: false,
        },
      ],
      [
        "@shikijs/rehype",
        {
          themes: {
            light: "github-light",
            dark: "github-dark",
          },
          defaultColor: false,
        },
      ],
    ],
  },
});

export default withMDX(nextConfig);

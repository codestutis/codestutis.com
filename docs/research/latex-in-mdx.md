# Rendering LaTeX-style math in this project's MDX

## Recommendation

Use `remark-math` to recognize math syntax and `rehype-katex` to turn that syntax into KaTeX HTML/MathML during MDX compilation. `rehype-katex` declares `katex` as a dependency, but installing `katex` directly is preferable here because application code imports its stylesheet and font assets:

```bash
npm install remark-math rehype-katex katex
```

This fits the existing Next.js 16.3.6, App Router, and `@next/mdx` 16.3.6 setup. The unified project describes `remark-math` as the Markdown syntax extension and `rehype-katex` as the HTML renderer; rendering happens at compile time, so math does not require KaTeX JavaScript in the browser. KaTeX still requires its CSS and font files. ([remark-math / rehype-katex](https://github.com/remarkjs/remark-math), [KaTeX server-side rendering](https://github.com/KaTeX/KaTeX#readme))

## Project configuration

Configure the plugins by **package-name strings**, not imported plugin functions. Turbopack is the default bundler in Next.js 16, and the version-matched Next.js guide specifically requires string plugin names for Turbopack. Plugin options must also be serializable because JavaScript functions cannot be passed into Turbopack's Rust process. ([Next.js MDX guide](https://nextjs.org/docs/app/guides/mdx#using-plugins-with-turbopack), [Next.js Turbopack guide](https://nextjs.org/docs/app/api-reference/turbopack))

The existing `next.config.ts` should become:

```ts
import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-math"],
    rehypePlugins: [
      [
        "rehype-katex",
        {
          strict: "warn",
          trust: false,
        },
      ],
    ],
  },
});

export default withMDX(nextConfig);
```

These string/boolean options are serializable. `strict: "warn"` surfaces TeX/LaTeX-compatibility problems without making every warning fatal, and `trust: false` blocks commands that can load resources or modify HTML attributes. Avoid KaTeX's callback forms for `strict` and `trust`, and function-valued macros, because functions are not serializable under Turbopack. ([Next.js MDX plugin example](https://nextjs.org/docs/app/guides/mdx#using-plugins-with-turbopack), [KaTeX options](https://katex.org/docs/options))

One version-sensitive caveat: the Next.js example includes `throwOnError: true`, but current `rehype-katex` 7 omits `throwOnError` from its public options. It first renders in throwing mode internally, catches a KaTeX parse error, records a file diagnostic, and retries with fallback output. Do not rely on this plugin to make malformed math fail `next build`; use a separate content validation/lint step if build-failing math validation is required. ([rehype-katex options](https://github.com/remarkjs/remark-math/tree/main/packages/rehype-katex#options), [rehype-katex implementation](https://raw.githubusercontent.com/remarkjs/remark-math/main/packages/rehype-katex/lib/index.js))

Do not enable `experimental.mdxRs` for this work. The installed Next.js guide still labels the Rust MDX compiler experimental and not recommended for production. ([Next.js MDX guide](https://nextjs.org/docs/app/guides/mdx#using-the-rust-based-mdx-compiler-experimental))

## CSS and authoring

Import KaTeX's external stylesheet once in the existing `app/blog/layout.tsx` so it is associated with the blog section:

```ts
import "katex/dist/katex.min.css";
```

KaTeX requires this stylesheet for correct layout. Next.js permits package stylesheets anywhere under `app`. If math later appears outside the blog, move this import to `app/layout.tsx` instead. Note that Next.js currently does not unload global styles imported by a nested route after client navigation, so the stylesheet can remain active after leaving `/blog`; this is harmless for KaTeX's namespaced selectors but worth knowing. ([KaTeX requirement](https://github.com/remarkjs/remark-math#example-katex), [Next.js external stylesheets and global CSS behavior](https://nextjs.org/docs/app/getting-started/css#external-stylesheets))

Authors can then use Markdown-first syntax in any `.mdx` post:

```mdx
Inline math uses a single delimiter: $E = mc^2$.

Display math uses delimiters on separate lines:

$$
L = \frac{1}{2} \rho v^2 S C_L
$$
```

This `$...$` / `$$...$$` syntax is an extension rather than portable CommonMark. A literal dollar sign in prose may need escaping as `\$`, especially when another dollar sign appears later in the same paragraph. ([remark-math syntax and portability](https://github.com/remarkjs/remark-math#when-should-i-use-this))

## Rendering, limitations, and security

- `rehype-katex` emits the final HTML/MathML at compile time. A statically generated or server-rendered post therefore needs no client-side KaTeX script, auto-render extension, client component, or hydration for the math itself. It does need the KaTeX CSS/fonts. ([remark-math](https://github.com/remarkjs/remark-math#when-should-i-use-this), [KaTeX API/SSR](https://github.com/KaTeX/KaTeX#api))
- KaTeX supports a large subset, not all of LaTeX or its packages. Check the official [supported functions](https://katex.org/docs/supported) before relying on specialized commands. Display equations do not automatically line-break by default, so very wide expressions may need author edits or overflow styling. ([KaTeX project](https://github.com/KaTeX/KaTeX#readme), [KaTeX options](https://katex.org/docs/options))
- For repository-owned posts, the default trust boundary is reasonable. Keep `trust: false`; do not replace it with a callback because callbacks are non-serializable under Turbopack. For untrusted math, KaTeX also recommends considering `maxSize` and `maxExpand` limits. ([KaTeX security](https://katex.org/docs/security), [KaTeX options](https://katex.org/docs/options))
- If arbitrary HTML/MDX ever becomes user-controlled, math rendering is not a complete sanitizer. KaTeX says its generated HTML is designed to prevent script injection but still recommends sanitization. If `rehype-sanitize` is introduced, sanitize the input **before** `rehype-katex` while allowing only the math marker classes; sanitizing afterward strips required MathML and inline styling. ([KaTeX security](https://katex.org/docs/security), [rehype-sanitize math example](https://github.com/rehypejs/rehype-sanitize#example-math))

## Verification when implemented

Add one temporary or real post containing inline math, display math, an intentionally invalid expression, and a wide expression. Then verify:

1. `npm run lint` and the production build pass for valid math.
2. Invalid math produces the expected `rehype-katex` diagnostic/fallback; if strict build failure is desired, verify the separate content-validation step.
3. Inline and display math are styled on a direct page load and client navigation.
4. The browser loads KaTeX CSS/font assets but no KaTeX rendering script.
5. Both the default Turbopack build and `next build --webpack` accept the same configuration.

## Primary sources

- [Next.js: How to use Markdown and MDX](https://nextjs.org/docs/app/guides/mdx)
- [Next.js: CSS and external package stylesheets](https://nextjs.org/docs/app/getting-started/css#external-stylesheets)
- [remark-math / rehype-katex repository](https://github.com/remarkjs/remark-math)
- [KaTeX project and server-side API](https://github.com/KaTeX/KaTeX#api)
- [KaTeX options](https://katex.org/docs/options)
- [KaTeX security](https://katex.org/docs/security)
- [rehype-sanitize math guidance](https://github.com/rehypejs/rehype-sanitize#example-math)

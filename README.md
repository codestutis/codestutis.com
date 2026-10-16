## codestutis.com

Personal portfolio and blog built with Next.js and exported as a static site.

## Edit content

Content lives in [`content/`](./content/README.md):

- [`content/home.toml`](./content/home.toml) controls the homepage profile, links, experience, education, and skills.
- [`content/blog/posts/`](./content/blog/posts/) contains blog posts as MDX files.
- [`content/projects/`](./content/projects/) contains project pages as MDX files.

Copy either `_template.mdx` file to create a new post or project. Files beginning with `_` are templates and never publish.

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Before publishing, run:

```bash
npm run lint
npx tsc --noEmit
npm run build -- --webpack
```

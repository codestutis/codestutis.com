# Graph Report - codestutis.com  (2026-10-16)

## Corpus Check
- 40 files · ~8,518 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: .css 2, (none) 1, .toml 1)

## Summary
- 198 nodes · 267 edges · 31 communities (10 shown, 21 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `c8769aef`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Tooling Configuration
- Project Catalog
- app/page.tsx
- TypeScript Configuration
- app/layout.tsx
- react
- Blog Content Loader
- Runtime Dependencies
- Development Tooling
- CSS Pipeline
- Agent Instructions
- Claude Instructions
- MDX Feature Article
- MDX Introduction Post
- Blog Template
- Chess Trainer Project
- cmdfreq Project
- IP Inspector Project
- LAN Chat Project
- Queens Solver Project
- Project Template
- Readme
- MDX Math Research
- GitHub Pages Deployment
- Chess Trainer Artwork
- cmdfreq Artwork
- IP Inspector Artwork
- LAN Chat Artwork
- Queens Artwork
- Portfolio design options

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `next` - 12 edges
3. `getProjects()` - 9 edges
4. `react` - 9 edges
5. `getPosts()` - 8 edges
6. `TagFilter()` - 7 edges
7. `Home()` - 7 edges
8. `getPost()` - 6 edges
9. `getProject()` - 6 edges
10. `ProjectCards()` - 5 edges

## Surprising Connections (you probably didn't know these)
- `generateStaticParams()` --calls--> `getPosts()`  [EXTRACTED]
  app/blog/[slug]/page.tsx → content/blog/posts/index.ts
- `generateMetadata()` --calls--> `getPost()`  [EXTRACTED]
  app/blog/[slug]/page.tsx → content/blog/posts/index.ts
- `generateStaticParams()` --calls--> `getProjects()`  [EXTRACTED]
  app/projects/[slug]/page.tsx → content/projects/index.ts
- `generateMetadata()` --calls--> `getProject()`  [EXTRACTED]
  app/projects/[slug]/page.tsx → content/projects/index.ts
- `BlogPostPage()` --calls--> `getPost()`  [EXTRACTED]
  app/blog/[slug]/page.tsx → content/blog/posts/index.ts

## Import Cycles
- None detected.

## Communities (31 total, 21 thin omitted)

### Community 0 - "Tooling Configuration"
Cohesion: 0.08
Nodes (25): eslintConfig, name, private, scripts, build, dev, lint, start (+17 more)

### Community 1 - "Project Catalog"
Cohesion: 0.17
Nodes (19): ProjectCards(), ProjectGallery(), ProjectGalleryProps, ProjectsPage(), dynamicParams, generateMetadata(), generateStaticParams(), ProjectPage() (+11 more)

### Community 2 - "app/page.tsx"
Cohesion: 0.18
Nodes (14): Education(), Experience(), Skills(), SocialLinks(), Home(), home, HomeContent, parseToml() (+6 more)

### Community 3 - "TypeScript Configuration"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 4 - "app/layout.tsx"
Cohesion: 0.11
Nodes (14): metadata, PageTransition(), geistMono, geistSans, GitHubIcon(), LinkedInIcon(), metadata, RootLayout() (+6 more)

### Community 5 - "react"
Cohesion: 0.16
Nodes (6): BlogPostListProps, BlogPostSummary, TagFilter(), TagFilterProps, components, react

### Community 6 - "Blog Content Loader"
Cohesion: 0.19
Nodes (17): BlogIndex(), BlogPostPage(), BlogPostPageProps, dynamicParams, generateMetadata(), generateStaticParams(), BlogPostList(), BlogPost (+9 more)

### Community 7 - "Runtime Dependencies"
Cohesion: 0.15
Nodes (13): dependencies, katex, lucide-react, @mdx-js/loader, @mdx-js/react, next, @next/mdx, react (+5 more)

### Community 8 - "Development Tooling"
Cohesion: 0.20
Nodes (10): devDependencies, eslint, eslint-config-next, @shikijs/rehype, tailwindcss, @tailwindcss/postcss, @types/node, @types/react (+2 more)

### Community 36 - "Portfolio design options"
Cohesion: 0.33
Nodes (5): Inspiration, Portfolio design options, Preview, Shared changes, Validation

## Knowledge Gaps
- **34 isolated node(s):** `@mdx-js/loader`, `@mdx-js/react`, `@types/mdx`, `react-dom`, `rehype-katex` (+29 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 120 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **21 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `app/layout.tsx` to `Tooling Configuration`, `Project Catalog`, `app/page.tsx`, `react`, `Blog Content Loader`?**
  _High betweenness centrality (0.191) - this node is a cross-community bridge._
- **What connects `@mdx-js/loader`, `@mdx-js/react`, `@types/mdx` to the rest of the system?**
  _34 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Tooling Configuration` be split into smaller, more focused modules?**
  _Cohesion score 0.07692307692307693 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `Tooling Configuration`, `Project Catalog`, `app/layout.tsx`, `Blog Content Loader`?**
  _High betweenness centrality (0.169) - this node is a cross-community bridge._
- **Should `TypeScript Configuration` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Why does `dependencies` connect `Runtime Dependencies` to `Tooling Configuration`?**
  _High betweenness centrality (0.089) - this node is a cross-community bridge._
- **Should `app/layout.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.11255411255411256 - nodes in this community are weakly interconnected._
# Graph Report - codestutis.com  (2026-10-16)

## Corpus Check
- 38 files · ~10,015 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: .css 2, (none) 1, .ico 1)

## Summary
- 201 nodes · 256 edges · 39 communities (11 shown, 28 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `c3f94fda`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Tooling Configuration
- Project Catalog
- Homepage Content
- TypeScript Configuration
- app/layout.tsx
- Blog Browsing
- Blog Content Loader
- Runtime Dependencies
- Development Tooling
- CSS Pipeline
- UNH Brand
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
- Document Icon
- Globe Icon
- UNH IOL Logo
- Next.js Logo
- Chess Trainer Artwork
- cmdfreq Artwork
- IP Inspector Artwork
- LAN Chat Artwork
- Queens Artwork
- Vercel Logo
- Window Icon
- Portfolio design options
- mdx-components.tsx
- scripts

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `next` - 11 edges
3. `getProjects()` - 9 edges
4. `getPosts()` - 8 edges
5. `TagFilter()` - 7 edges
6. `Home()` - 7 edges
7. `react` - 7 edges
8. `getPost()` - 6 edges
9. `getProject()` - 6 edges
10. `ProjectCards()` - 5 edges

## Surprising Connections (you probably didn't know these)
- `generateStaticParams()` --calls--> `getPosts()`  [EXTRACTED]
  app/blog/[slug]/page.tsx → content/blog/posts/index.ts
- `generateMetadata()` --calls--> `getPost()`  [EXTRACTED]
  app/blog/[slug]/page.tsx → content/blog/posts/index.ts
- `BlogIndex()` --calls--> `getPosts()`  [EXTRACTED]
  app/blog/page.tsx → content/blog/posts/index.ts
- `generateStaticParams()` --calls--> `getProjects()`  [EXTRACTED]
  app/projects/[slug]/page.tsx → content/projects/index.ts
- `generateMetadata()` --calls--> `getProject()`  [EXTRACTED]
  app/projects/[slug]/page.tsx → content/projects/index.ts

## Import Cycles
- None detected.

## Communities (39 total, 28 thin omitted)

### Community 0 - "Tooling Configuration"
Cohesion: 0.07
Nodes (25): metadata, eslintConfig, nextConfig, withMDX, name, private, version, eslint (+17 more)

### Community 1 - "Project Catalog"
Cohesion: 0.15
Nodes (21): ProjectCards(), ProjectGallery(), ProjectGalleryProps, TagFilterProps, ProjectsPage(), dynamicParams, generateMetadata(), generateStaticParams() (+13 more)

### Community 2 - "Homepage Content"
Cohesion: 0.15
Nodes (16): Education(), Experience(), Skills(), SocialLinks(), Home(), metadata, home, HomeContent (+8 more)

### Community 3 - "TypeScript Configuration"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 4 - "app/layout.tsx"
Cohesion: 0.33
Nodes (3): geistMono, geistSans, metadata

### Community 5 - "Blog Browsing"
Cohesion: 0.31
Nodes (5): BlogIndex(), BlogPostList(), BlogPostListProps, BlogPostSummary, TagFilter()

### Community 6 - "Blog Content Loader"
Cohesion: 0.20
Nodes (15): BlogPostPage(), BlogPostPageProps, dynamicParams, generateMetadata(), generateStaticParams(), BlogPost, BlogPostMeta, filenames() (+7 more)

### Community 7 - "Runtime Dependencies"
Cohesion: 0.15
Nodes (13): dependencies, katex, lucide-react, @mdx-js/loader, @mdx-js/react, next, @next/mdx, react (+5 more)

### Community 8 - "Development Tooling"
Cohesion: 0.20
Nodes (10): devDependencies, eslint, eslint-config-next, @shikijs/rehype, tailwindcss, @tailwindcss/postcss, @types/node, @types/react (+2 more)

### Community 36 - "Portfolio design options"
Cohesion: 0.33
Nodes (5): Inspiration, Portfolio design options, Preview, Shared changes, Validation

### Community 38 - "scripts"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, start

## Knowledge Gaps
- **42 isolated node(s):** `@mdx-js/loader`, `@mdx-js/react`, `@types/mdx`, `react-dom`, `rehype-katex` (+37 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 128 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **28 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `Homepage Content` to `Tooling Configuration`, `Project Catalog`, `app/layout.tsx`, `Blog Browsing`, `Blog Content Loader`?**
  _High betweenness centrality (0.197) - this node is a cross-community bridge._
- **What connects `@mdx-js/loader`, `@mdx-js/react`, `@types/mdx` to the rest of the system?**
  _42 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Tooling Configuration` be split into smaller, more focused modules?**
  _Cohesion score 0.06896551724137931 - nodes in this community are weakly interconnected._
- **Why does `react` connect `Project Catalog` to `Tooling Configuration`, `mdx-components.tsx`, `Blog Browsing`, `Blog Content Loader`?**
  _High betweenness centrality (0.137) - this node is a cross-community bridge._
- **Should `Project Catalog` be split into smaller, more focused modules?**
  _Cohesion score 0.14814814814814814 - nodes in this community are weakly interconnected._
- **Why does `dependencies` connect `Runtime Dependencies` to `Tooling Configuration`?**
  _High betweenness centrality (0.084) - this node is a cross-community bridge._
- **Should `TypeScript Configuration` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
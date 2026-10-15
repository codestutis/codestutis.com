# Portfolio design options

Three local branches share the same content, routes, and original symbolic SVG project artwork. They are alternatives: choose one branch rather than merging the three homepage implementations together.

| Branch | Direction | Background presentation |
| --- | --- | --- |
| `design/network-canvas` | Airy blue-green canvas; Avenir/Geist type; subtle network motion | Clickable network nodes introduce work, education, and skills; three compact panels show the details before projects. |
| `design/desktop-workspace` | Navy desktop; Geist and monospace utility type; blue and apricot accents | A sticky profile sidebar and a window with Experience, Education, and Skills tabs. Arrow keys, Home, and End navigate tabs. |
| `design/field-notebook` | Lilac paper; Iowan/Palatino/Georgia display type; purple and pencil-brown accents | An asymmetric work folder, education note, and skills sheet, with an original SVG sketch and gently tilted paper. |

## Preview

Switch to a design, then use the existing development server or start one:

```sh
git switch design/network-canvas
npm run dev
```

Replace the branch name with either alternative above. Refresh the browser after switching. All branches are committed; `main` retains the original site. No remote push or deployment is part of these local alternatives.

## Shared changes

- Experience, education, and skills appear before the selected projects.
- Cards put artwork in approximately the upper half, with title, description, and technology tags below. The full card links to its project page.
- Five self-contained SVG illustrations live in `public/projects/`, named after project slugs. They are symbolic artwork, not product screenshots.
- Project filters, individual project pages, blog posts, contact links, and MDX content remain available.
- Expandable details preserve the longer work and coursework descriptions.
- Responsive layouts, visible keyboard focus, a skip link, and reduced-motion handling are included.
- The canvas and notebook intentionally use light palettes; the desktop intentionally uses a dark palette. This keeps each direction consistent with the system appearance setting.
- No dependencies were added.

## Validation

Each design passed `npm run build -- --webpack`, including TypeScript checks and generation of all 13 pages. Each homepage was visually reviewed in Safari at desktop and 390px phone width; the notebook was also checked at 320px. Network anchor navigation, desktop tab clicks and arrow-key navigation, and the shared project filter were exercised in the browser.

The default Turbopack build encountered a local MDX compiler worker error (`binding to a port: Operation not permitted`). Webpack builds succeeded; the repository's default build command was left intact.

## Inspiration

The calm personal-site approach and playful details were informed by [Umad Akram's site](https://www.umadakram.com/) and the source of [8n1.net's dev branch](https://github.com/dmccrthy/8n1.net/tree/dev). Layouts and SVG illustrations were created for this portfolio; their personal content and assets were not copied.

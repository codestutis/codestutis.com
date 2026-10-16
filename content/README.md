# Content editing

## Homepage

Edit [home.toml](./home.toml). It contains the profile, links, experience, education, and skills shown on the homepage. Each `[[experience]]` and `[[education]]` entry creates its own card.

## Blog posts

Copy `blog/posts/_template.mdx`, rename it with a URL-safe slug such as `my-new-post.mdx`, and edit its `meta` object and Markdown. The blog automatically discovers every `.mdx` file in that directory except files beginning with `_`.

## Projects

Copy `projects/_template.mdx`, rename it with a URL-safe slug, and edit its `meta` object and Markdown. Project pages and the project list automatically discover every `.mdx` file in that directory except files beginning with `_`. Set `pinned: true` to show a project on the homepage. An image is optional; without one, the card uses a generated letter mark.

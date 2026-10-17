# Portfolio website

Built with [Astro](https://astro.build). Deployed to GitHub Pages automatically on every push to `main`.

## Run it locally

```sh
npm install      # first time only
npm run dev      # open http://localhost:4321, updates as you save files
npm run build    # build the final site into dist/ (also checks your content for mistakes)
```

## Where things live

| What you want to change | File |
|---|---|
| Name, headline, intro, GitHub/LinkedIn links, header links | `src/site.config.ts` |
| Projects | `src/content/projects/*.md` (one file per project) |
| Project preview images | `src/content/projects/images/` |
| About text, location, skills | `src/content/about/about.md` |
| Colors and fonts | `src/styles/global.css` (top of file) |
| GitHub Pages address | `astro.config.mjs` |

## Add a project

1. Put a screenshot in `src/content/projects/images/` (PNG or JPG, ideally 16:10, e.g. 1280×800). It is resized and compressed automatically.
2. Create `src/content/projects/my-project.md`:

   ```md
   ---
   title: My project
   description: One or two sentences about what it does (max 160 characters).
   repo: https://github.com/your-username/my-project
   demo: https://my-project.example.com   # optional
   image: ./images/my-project.png         # optional, a placeholder is shown without it
   imageAlt: What the screenshot shows
   tags: [Go, CLI]
   order: 1                               # lower numbers appear first
   draft: false                           # true hides it without deleting it
   ---
   ```

3. Run `npm run dev` to check it. If a field is wrong, the error names the file and the field.

`radar-legislativo.md` is a complete example to copy from.

## Add a page

Create `src/pages/talks.astro`, and it is served at `/talks`:

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
---

<BaseLayout title="Talks">
  <section class="wrap" style="padding-block: 4rem">
    <h1>Talks</h1>
    <p>Content goes here.</p>
  </section>
</BaseLayout>
```

Then add `{ label: "Talks", href: "/talks" }` to `nav` in `src/site.config.ts`.

## Deploy to GitHub Pages

1. Create a GitHub repository named `your-username.github.io` (this gives the site the address `https://your-username.github.io`).
   If you use another name, set `base` in `astro.config.mjs` as described there.
2. Set `site` in `astro.config.mjs` to your address.
3. Push this folder to the `main` branch.
4. In the repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.

The workflow in `.github/workflows/deploy.yml` builds and publishes the site on every push. Progress shows in the **Actions** tab.

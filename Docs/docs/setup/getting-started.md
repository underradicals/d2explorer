---
layout: doc
---

# Getting Started

## Setting Up Vitepress

I am not going to try and compete with Evan's team here, Vitepress Documentation is already amazing, and for more details you just navigate to [vitepress](https://vitepress.dev/). But to just exaggerate how simple this framework is to use, these are the steps I took:

::: code-group

```sh [npm]
npm add -D vitepress
```

```sh [pnpm]
pnpm add -D vitepress
```

:::

After running one of these lines, go ahead and run the next line to scaffold you site:

::: code-group

```sh [npm]
npx vitepress init
```

```sh [pnpm]
pnpm vitepress init
```

:::

After which you will be greeted with a slew of questions:

```sh
┌  Welcome to VitePress!
│
◇  Where should VitePress initialize the config?
│  ./docs
│
◇  Where should VitePress look for your markdown files?
│  ./docs
│
◇  Site title:
│  My Awesome Project
│
◇  Site description:
│  A VitePress Site
│
◇  Theme:
│  Default Theme
│
◇  Use TypeScript for config and theme files?
│  Yes
│
◇  Add VitePress npm scripts to package.json?
│  Yes
│
◇  Add a prefix for VitePress npm scripts?
│  Yes
│
◇  Prefix for VitePress npm scripts:
│  docs
│
└  Done! Now run pnpm run docs:dev and start writing.
```

### Project Structure

```sh
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  ├─ api-examples.md
│  ├─ markdown-examples.md
│  └─ index.md
└─ package.json
```

Go ahead and delete the files `api-example.md` and `markdown-example.md`. Create a directory named `docs` and and a file `index.md`. Then open up `~/.vitepress/config.ts` or `~/.vitepress/config.js` depending on which you chose: **Typescript** or **Javascript** and paste this config.

```ts
import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Your Title",
  description: "A svelte description",
  lastUpdated: true,
  themeConfig: {
    outline: {
      level: [1, 4],
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "docs" },
    ],

    sidebar: {
      "/docs/": [
        {
          text: "Introduction",
          items: [{ text: "My First Doc", link: "/docs/index" }],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/underradicals" }],
  },
});
```

After having done all that: You have added your own title, a short description, go ahead and run the command `docs:dev` from your `package.json`.

```sh
npm run docs:dev
```

### Looks great doesn't it?

Now head on over to [vitepress](https://vitepress.dev/) homepage and dive in! Make small changes. And incrementally add to what you know. Happy Coding!

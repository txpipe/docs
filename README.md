# Starlight Starter Kit: Basics

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

```
npm create astro@latest -- --template starlight
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/starlight/tree/main/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/starlight/tree/main/examples/basics)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/withastro/starlight&create_from_path=examples/basics)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwithastro%2Fstarlight%2Ftree%2Fmain%2Fexamples%2Fbasics&project-name=my-starlight-docs&repository-name=my-starlight-docs)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).

## Submodules
After cloning this repository, you need to initialize the submodules by running the following command:
```sh
git submodule update --init --recursive
```

To update the submodules to the latest commit, run the following command:
```sh
git submodule update --recursive --remote
```
---

## Add docs
### Prepare the docs repository
The structure for the docs repository should be something like this:
```
docs/
├── content
│   ├── quickstart.mdx
│   ├── Installation/
│   │   └── from_source.mdx
│   └── ...
├── assets (optional)
│   ├── asset.png
│   └── asset2.png
...
```
- **content**: will contain all the documetation files. Folder name is case sensitive as it will be used as name for the sidebar.
- **assets**: will contain all the assets used in the documentation. This folder is optional, if you don't have any assets, you can skip it.

### Add the docs to the project
First of all, you need to add as submodule the docs repository.
To add a new submodule, run the following command:
```sh
git submodule add <submodule_https_repository> submodules/<name>
```

Now, you need to create a symlink to the docs repository in the `src/content/docs` directory to the submodule.
```sh
cd src/content/docs
ln -s ../../../submodules/<submodule>/docs/content <path_docs>
```

Following the example, we will create a symlink to the `balius` documentation:
```sh
cd src/content/docs
ln -s ../../../submodules/balius/docs/content/ balius
```

### Add the assets to the project
If you have assets, you need to create a symlink to the assets repository in the `public/assets` directory to the submodule.
```sh
cd public/assets
ln -s ../../submodules/<submodule>/docs/assets <path_assets>
```

### Add docs to the sidebar
For this, we will modify `astro.config.mjs` file and add the new docs to the sidebar config.
```ts
{
  label: '<docs-name>',
  autogenerate: { directory: '/<docs-folder>/', collapsed: true },
},
```
- **label**: how this will appear on the dropdown menu on sidebar
- **autogenerate**: the folder that will be used to generate the sidebar. This directory is relative to the `src/content/docs` directory

### Add metadata to the docs
You can modify the label and other properties for a folder on the sidebar by using a _meta.yml file on the folder.
For more information, check the [Starlight auto sidebar](https://starlight-auto-sidebar.netlify.app/) plugin.

---

### Example adding `balius` documentation:
```sh
git submodule add -b feat/global-docs https://github.com/txpipe/balius submodules/balius
```

In this case, we are adding the `balius` documentation as a submodule in the `submodules/balius` directory taking the information from `feat/global-docs` branch.

Next, we will create the symlink to the `balius` documentation:
```sh
cd src/content/docs
ln -s ../../../submodules/balius/docs/content/ balius
```
We don't have assets folder, so we can skip this step.

Finally, we will modify the `astro.config.mjs` file to add the new docs to the sidebar:
```ts
{
  label: 'Balius',
  autogenerate: { directory: '/balius/', collapsed: true },
},
```
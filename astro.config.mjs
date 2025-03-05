// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import rehypeMermaid from 'rehype-mermaid';

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.txpipe.io',
  trailingSlash: 'never',
  integrations: [
    starlight({
      customCss: [
        '@fontsource-variable/inter',
        './src/styles/global.css',
      ],
      title: 'Docs',
      lastUpdated: true,
      logo: {
        src: './src/assets/txpipe-logo.webp',
      },
      social: {
        github: 'https://github.com/txpipe/docs',
      },
      sidebar: [
        {
          label: 'Boros',
          autogenerate: { directory: '/boros/', collapsed: true },
        },
        {
          label: 'Dolos',
          autogenerate: { directory: '/dolos/', collapsed: true },
        },
      ],
      components: {
        Sidebar: './src/components/Sidebar.astro',
        Header: './src/components/Header.astro',
        SiteTitle: './src/components/SiteTitle.astro',
        Search: './src/components/Search.astro',
      },
      expressiveCode: {
        themes: ['starlight-dark'],
        useStarlightDarkModeSwitch: false,
      },
      routeMiddleware: './src/routeData.ts',
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    rehypePlugins: [
      [rehypeMermaid, { strategy: 'img-svg', dark: true }],
    ],
  },
});

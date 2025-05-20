// @ts-check
import fs from 'fs';
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import rehypeMermaid from 'rehype-mermaid';
import starlightAutoSidebar from 'starlight-auto-sidebar';

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.txpipe.io',
  trailingSlash: 'never',
  integrations: [
    starlight({
      plugins: [starlightAutoSidebar()],
      customCss: [
        '@fontsource-variable/inter',
        '@fontsource-variable/roboto-mono',
        './src/styles/global.css',
      ],
      title: 'TxPipe Docs',
      lastUpdated: true,
      logo: {
        src: './src/assets/txpipe-logo.webp',
      },
      social: {
        github: 'https://github.com/txpipe/docs',
      },
      sidebar: [
        {
          label: 'Balius',
          autogenerate: { directory: 'balius', collapsed: true },
        },
        {
          label: 'Boros',
          autogenerate: { directory: 'boros', collapsed: true },
        },
        {
          label: 'Dolos',
          autogenerate: { directory: 'dolos', collapsed: true },
        },
        {
          label: 'Griffin',
          autogenerate: { directory: 'griffin', collapsed: true },
        },
        {
          label: 'Oura/v1',
          autogenerate: { directory: 'oura/v1', collapsed: true },
        },
        {
          label: 'Oura/v2',
          autogenerate: { directory: 'oura/v2', collapsed: true },
        },
        {
          label: 'Tx3',
          autogenerate: { directory: 'tx3', collapsed: true },
        },
      ],
      components: {
        Sidebar: './src/components/overrides/Sidebar.astro',
        Header: './src/components/overrides/Header.astro',
        SiteTitle: './src/components/overrides/SiteTitle.astro',
        Search: './src/components/overrides/Search.astro',
        PageFrame: './src/components/overrides/PageFrame.astro',
        ContentPanel: './src/components/overrides/ContentPanel.astro',
        MobileMenuFooter: './src/components/overrides/MobileMenuFooter.astro',
        Footer: './src/components/overrides/Footer.astro',
      },
      expressiveCode: {
        themes: ['starlight-dark'],
        useStarlightDarkModeSwitch: false,
        shiki: {
          langs: [
            JSON.parse(fs.readFileSync('./langs/tx3.tmLanguage.json', 'utf-8')),
          ],
        },
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

  experimental: {
    svg: true,
  },
});

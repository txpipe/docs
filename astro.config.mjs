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
          autogenerate: { directory: '/balius/', collapsed: true },
        },
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
        Sidebar: './src/components/overrides/Sidebar.astro',
        Header: './src/components/overrides/Header.astro',
        SiteTitle: './src/components/overrides/SiteTitle.astro',
        Search: './src/components/overrides/Search.astro',
        PageFrame: './src/components/overrides/PageFrame.astro',
        ContentPanel: './src/components/overrides/ContentPanel.astro',
        MobileMenuFooter: './src/components/overrides/MobileMenuFooter.astro',
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

// @ts-check
import { defineConfig } from 'astro/config';
import expressiveCode from 'astro-expressive-code';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://calebukle.com', // Update with your actual domain
  integrations: [
    expressiveCode({
      themes: ['light-plus'],
      plugins: [pluginLineNumbers()],
      defaultProps: {
        showLineNumbers: true,
      },
      styleOverrides: {
        borderRadius: '0',
        borderWidth: '2px',
      },
      frames: {
        showCopyToClipboardButton: false,
      },
    }),
    sitemap(),
  ],
});

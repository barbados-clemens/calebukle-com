// @ts-check
import { defineConfig } from 'astro/config';
import expressiveCode from 'astro-expressive-code';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import sitemap from '@astrojs/sitemap';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// https://astro.build/config
export default defineConfig({
  site: 'https://calebukle.com', // Update with your actual domain
  markdown: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          properties: {
            class: 'heading-link',
            ariaLabel: 'Link to this section',
          },
          content: {
            type: 'text',
            value: ' #',
          },
          test: (node) => node.tagName !== 'h1',
        },
      ],
    ],
  },
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

import mdx from '@astrojs/mdx';
import { defineConfig } from 'astro/config';


// https://astro.build/config
export default defineConfig({
  site: 'https://chrisobando.dev',
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'nord'
    },
    remarkPlugins: ['remark-gfm', 'remark-smartypants'],
    rehypePlugins: [['rehype-external-links', {
      target: '_blank'
    }]]
  }
});
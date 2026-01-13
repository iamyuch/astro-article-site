// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com', // 替换为实际域名
  output: 'static',
  integrations: [sitemap()],
  build: {
    format: 'directory'
  },
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    }
  }
});

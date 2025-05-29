// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'BCBlock Docs',
          social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/TastyPommesLul/BCBlock' }],
          sidebar: [
              {
                  label: 'Guides',
                  items: [
                      // Each item here is one entry in the navigation menu.
                      { label: 'Example Guide', slug: 'guides/example' },
                      { label: "thingy", autogenerate: { directory: "guides/admin" } }
                  ],
              },
              {
                  label: 'Reference',
                  autogenerate: { directory: 'reference' },
              },

          ],
      }),
	],

  adapter: cloudflare({
      platformProxy: {
          enabled: true
      }
  }),
});
// @ts-check
import {defineConfig, passthroughImageService} from 'astro/config';
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
                      { label: "Administrator", autogenerate: { directory: "guides/admin" } }
                  ],
              },
          ],
      }),
	],

  adapter: cloudflare({
      platformProxy: {
          enabled: true
      }
  }),
    image: {
      service: passthroughImageService()
    }
});
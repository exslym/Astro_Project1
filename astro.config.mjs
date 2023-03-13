import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), preact()],
	site: 'https://exslym.github.io/astro_project1',
	base: '/astro_project1',
});

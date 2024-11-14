import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import expressiveCode from 'astro-expressive-code'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'
import rehypeExternalLinks from 'rehype-external-links'
import remarkUnwrapImages from 'remark-unwrap-images'
import { expressiveCodeOptions } from './src/site.config'
import { remarkReadingTime } from './src/utils/remarkReadingTime.ts'

// https://astro.build/config
export default defineConfig({
	site: "https://kiwidev808.github.io",
	integrations: [
		expressiveCode(expressiveCodeOptions),
		tailwind({
			applyBaseStyles: false
		}),
		sitemap(),
		mdx(),
		icon()
	],
	markdown: {
		remarkPlugins: [remarkUnwrapImages, remarkReadingTime],
		rehypePlugins: [
			[
				rehypeExternalLinks,
				{
					target: '_blank',
					rel: ['nofollow, noopener, noreferrer']
				}
			]
		],
		remarkRehype: {
			footnoteLabelProperties: {
				className: ['']
			}
		}
	},
	prefetch: true,
})

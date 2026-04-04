import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";

export default defineConfig({
	site: "CHANGEME_CUSTOM_DOMAIN",
	output: "server",
	adapter: cloudflare({
		imageService: { build: 'compile', runtime: 'cloudflare-binding' },
	}),
	compressHTML: false,
	experimental: {
		clientPrerender: true,
		contentIntellisense: true,
		svgo: true,
		rustCompiler: true,
		queuedRendering: {
			enabled: true,
			contentCache: true,
		},
	},
	prefetch: {
		defaultStrategy: "hover",
	},
	integrations: [sitemap()],
	devToolbar: {
		enabled: false,
	},
	vite: {
		css: {
			transformer: "lightningcss",
			lightningcss: {
				targets: browserslistToTargets(
					browserslist([
						"> 0.5%",
						"last 2 versions",
						"Firefox ESR",
						"not dead",
						"cover 80% in CN",
						"unreleased versions",
					]),
				),
			},
		},
		build: {
			minify: false,
			cssMinify: false,
		},
		plugins: [tailwindcss()],
	},
});

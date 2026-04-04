import handler from "@astrojs/cloudflare/entrypoints/server";

export default {
	async fetch(request, env, ctx) {
		return handler.fetch(request, env, ctx);
	},
} satisfies ExportedHandler<Env>;

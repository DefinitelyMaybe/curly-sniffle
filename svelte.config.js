import preprocess from 'svelte-preprocess';
import adapter from "svelte-adapter-deno";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter()//{
      // default options are shown
      // out: 'build',
      // deps: './deps.ts' // (relative to adapter-deno package)
    //})
	}
};

export default config;

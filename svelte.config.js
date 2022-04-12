import vercel from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
import viteCompression from 'vite-plugin-compression';
import viteImagemin from 'vite-plugin-imagemin';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	kit: {
		adapter: vercel(),
		version: {
			name: Math.ceil(Math.random() * Date.now())
				.toString()
				.slice(0, 3)
		},
		vite: {
			build: {
				reportCompressedSize: false,
				target: 'esnext',
				minify: 'terser'
			},
			plugins: [
				viteImagemin({
					optipng: {
						optimizationLevel: 7
					},
					verbose: false
				}),
				viteCompression({
					algorithm: 'brotliCompress',
					threshold: 512,
					verbose: false,
					compressionOptions: {
						level: 3
					}
				})
			]
		}
	}
};

export default config;

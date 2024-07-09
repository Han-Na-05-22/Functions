import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	plugins: [
		react({
			jsxRuntime: 'automatic',
		}),
		tsconfigPaths(),
	],
	server: {
		open: true,
	},
	build: {
		outDir: 'build',
		rollupOptions: {
			input: './src/index.tsx',
		},
	},
	base: '/',
	resolve: {
		alias: {
			'@': '/src',
		},
	},
});

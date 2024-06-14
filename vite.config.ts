import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    open: true, 
  },
  build: {
    outDir: 'build', 
    rollupOptions: {
        input: './src/index.tsx'
      }
  },
  base: '/',
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});
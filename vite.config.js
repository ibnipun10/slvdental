import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
  plugins: [react(), viteSingleFile()],
  base: './',
  build: {
    outDir: 'dist',
    target: 'esnext',
    assetsInlineLimit: 100000000, // Inlines all assets so it can run 100% locally with zero server
    chunkSizeWarningLimit: 100000
  }
});

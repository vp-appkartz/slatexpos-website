import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import prerender from 'vite-plugin-prerender';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    prerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: [
        '/',
        '/pricing',
        '/hardware',
        '/privacy',
        '/career',
        // Add more dynamic routes here as needed (e.g. /products/offline-pos)
      ],
      renderer: new prerender.PuppeteerRenderer({
        renderAfterElementExists: '#root',
        maxConcurrentRoutes: 4,
      }),
    }),
  ],
  server: {
    port: 3012,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

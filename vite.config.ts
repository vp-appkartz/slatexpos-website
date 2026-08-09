import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import prerender from 'vite-plugin-prerender';
import path from 'path';

const isVercel = process.env.VERCEL === '1';
const plugins: any[] = [react()];

if (!isVercel) {
  plugins.push(
    prerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: [
        '/',
        '/pricing',
        '/hardware',
        '/privacy',
        '/career',
      ],
      renderer: new prerender.PuppeteerRenderer({
        renderAfterElementExists: '#root',
        maxConcurrentRoutes: 4,
      }),
    })
  );
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins,
  server: {
    port: 3012,
    strictPort: true,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

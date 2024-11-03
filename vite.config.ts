import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import type { Plugin } from 'vite';

// Plugin personnalisé pour gérer le type MIME
const setMimeTypes: Plugin = {
  name: 'set-mime-types',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url?.endsWith('.mp4')) {
        res.setHeader('Content-Type', 'video/mp4');
      }
      next();
    });
  },
};

export default defineConfig({
  plugins: [react(), setMimeTypes],
});
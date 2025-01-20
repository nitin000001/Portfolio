import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.docx'], // Include .docx files as assets

  build: {
    outDir: 'dist', // Ensure this is the correct output directory for deployment
  },
  server: {
    historyApiFallback: {
      rewrites: [
        {
          from: /^\/(?!api).*$/, // Matches all URLs except the API routes
          to: '/index.html', // Redirect all other routes to index.html
        },
      ],
    },
  },
});

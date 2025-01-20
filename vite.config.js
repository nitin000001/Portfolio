import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.docx'], // Include .docx files as assets

  // Handle SPA routing issues when refreshing on client-side routes
  build: {
    outDir: 'dist', // Ensure this is the correct output directory for deployment
  },
  server: {
    historyApiFallback: true, // Enables support for React Router or other client-side routing
  },
});

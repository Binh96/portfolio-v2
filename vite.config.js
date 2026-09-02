import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio-v2/', // Exact base URL path for GitHub Pages repository Binh96/portfolio-v2
  plugins: [react(), tailwindcss()],
});

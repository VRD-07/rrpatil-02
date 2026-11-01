import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Simple Vite Configuration for React & Tailwind CSS
export default defineConfig({
  plugins: [react(), tailwindcss()],
});

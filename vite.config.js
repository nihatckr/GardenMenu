import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  /*   build: {
      outDir: resolve(__dirname, "server-dist"),
      emptyOutDir: true,
      minify: 'terser',
      lib: {
        entry: resolve(__dirname, "./src/main.jsx"),
        name: "garden",
        fileName: format => `mono_garden_${format}.js`,
        formats: ['cjs', 'es', 'iife', 'umd']
      }
  
    }, */
  plugins: [react()],
})

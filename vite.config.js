import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),  tailwindcss(),],
  base: './', // Asegura rutas relativas
  build: {
    outDir: 'dist', // Asegura que la carpeta de salida sea 'dist'
  },
})


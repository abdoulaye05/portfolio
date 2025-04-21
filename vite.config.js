import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/', // 👈 très important pour GitHub Pages
  plugins: [react()],
})

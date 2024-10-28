import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: process.env.APP_PORT || 3000
  },
  plugins: [
    vue(),
    react({
      include: ["**/*.js", "**/*.vue"],
      exclude: ["node_modules", "dist"]
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

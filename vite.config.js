import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/start-upmvp/', // 👈 Tells Vite where to load assets from
})
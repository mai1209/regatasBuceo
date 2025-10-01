import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/regatasBuceo/", // <- Cambiá "buceo" por el nombre exacto de tu repo
})

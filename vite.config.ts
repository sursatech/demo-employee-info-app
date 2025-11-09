import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allow access from any host (0.0.0.0)
    port: 5173,
    open: false,
    strictPort: false
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})

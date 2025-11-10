import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable Fast Refresh for instant hot reload
      fastRefresh: true,
    })
  ],
  server: {
    host: true, // Allow access from any host (0.0.0.0)
    port: 5173,
    open: false,
    strictPort: false,
    hmr: {
      overlay: true, // Show error overlay on the page
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})

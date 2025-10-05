import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      react(),
      tailwindcss(),
      basicSsl()
  ],
  server: {
    https: true,
    host: 'localhost',
    port: 3000,
    strictPort: true,
    open: true
  }
})

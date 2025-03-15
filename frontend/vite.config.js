import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 9000,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"], // Ensure .tsx is included
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),  // Add this alias
    },
  },
  plugins: [react(), tailwindcss()],
})

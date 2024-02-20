import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  build: {
    outDir: "packages",
    lib: {
      entry: "src/index.js",
      name: "tools-magnifier",
      formats: ["es"],
      fileName: (format) => "tools-magnifier.js",
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
})

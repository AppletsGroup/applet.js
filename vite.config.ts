import path from "path";

import { defineConfig } from "vite";
// import dts from 'vite-plugin-dts'
// import react from '@vitejs/plugin-react'

export default defineConfig(() => ({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: 'index'
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React'
        }
      }
    },
  },
  // plugins: [
  //   react({
  //     // https://github.com/vitejs/vite/issues/7586
  //     // https://github.com/vitejs/vite-plugin-react/issues/3
  //     jsxRuntime: 'classic',
  //   }), 
  //   dts()
  // ]
}));
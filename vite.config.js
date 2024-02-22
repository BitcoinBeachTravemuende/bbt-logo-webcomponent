import { defineConfig } from "vite";

// vite.config.js
// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: 'src/bbt-logo.ts',
      name: 'BBTLogo',
      // the proper extensions will be added
      fileName: 'index',
      formats: ['es'],
    },
  },
})

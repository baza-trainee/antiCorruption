import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sass from "sass";
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets',
          dest: 'dist/assets'
        }
      ]
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        loader: "sass-loader",
        options: {
          implementation: sass,
        },
      },
    },
  },
});
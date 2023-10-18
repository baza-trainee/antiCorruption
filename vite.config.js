import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sass from "sass";

export default defineConfig({
  plugins: [react()],
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
  static: {
    paths: ["src/assets/"],
  },
});

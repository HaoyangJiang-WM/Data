import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const base = process.env.GITHUB_ACTIONS ? "/Data/" : "/";

export default defineConfig({
  base,
  plugins: [react()],
  test: {
    globals: true,
    setupFiles: "./src/test-setup.js",
  },
});

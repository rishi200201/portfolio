import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // For GitHub Pages hosting under username.github.io/repo-name/
  // ensure base ends with a trailing slash
  base: "/portfolio/",
});

/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/vocab-builder/",
  plugins: [react()],
  test: {
    // name: "happy-dom",
    root: "./src/tests",
    environment: "jsdom",
    setupFiles: ["./setup.ts"],
    // testMatch: ['./*.test.tsx'],
    globals: true,
  },
});

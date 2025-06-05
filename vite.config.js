/* eslint-env node */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from 'url';
import { componentTagger } from "lovable-tagger";

// 👇 FIX za __dirname u ESM okruženju na Windowsu
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("Alias @ resolves to:", path.resolve(__dirname, "./src"));

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

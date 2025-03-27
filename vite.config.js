import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  define: {
    "process.env": {},
  },
});

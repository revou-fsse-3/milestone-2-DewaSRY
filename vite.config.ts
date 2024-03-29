import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { URL, fileURLToPath } from "node:url";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port: 3001,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@common": fileURLToPath(new URL("./src/common", import.meta.url)),
      "@pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
      "@features": fileURLToPath(new URL("./src/features", import.meta.url)),
      "@redux": fileURLToPath(new URL("./src/features/redux", import.meta.url)),
      "@store": fileURLToPath(new URL("./src/features/store", import.meta.url)),
      "@schemas": fileURLToPath(new URL("./src/schemas", import.meta.url)),
      "@utils": fileURLToPath(new URL("./src/utils", import.meta.url)),
      "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
      "@libs": fileURLToPath(new URL("./src/libs", import.meta.url)),
      "@layout": fileURLToPath(new URL("./src/layout", import.meta.url)),
      "@container": fileURLToPath(new URL("./src/container", import.meta.url)),
      "@context": fileURLToPath(new URL("./src/context", import.meta.url)),
      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url)
      ),
    },
  },
});

// Non-Lovable Vite config: explicitly include the plugins required for the app.
// This preserves the original build behavior without the Lovable wrapper.
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    tanstackStart({
      // Redirect TanStack Start's bundled server entry to src/server.ts (same as before)
      server: { entry: "server" },
    }),
    react(),
    tailwind(),
  ],
});

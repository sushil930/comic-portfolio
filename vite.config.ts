import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  optimizeDeps: {
    exclude: ['react', 'react-dom'],
  },
  plugins: [
    react(),
    // mode === 'development' &&
    // componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // rollupOptions: {
    //   output: {
    //     manualChunks(id) {
    //       if (id.includes('node_modules')) {
    //         if (id.includes('react') || id.includes('framer-motion') || id.includes('lucide-react')) {
    //           return 'vendor_frameworks';
    //         }
    //         return 'vendor';
    //       }
    //     },
    //   },
    // },
    chunkSizeWarningLimit: 1000,
    performance: {
      hints: 'warning',
    },
  },
  preview: {
    port: 8080,
    open: true,
  },
}));

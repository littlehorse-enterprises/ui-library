import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import eslint from "vite-plugin-eslint";

// Get all component directories
const components = fs
  .readdirSync(path.resolve(__dirname, "src"))
  .filter(dir => {
    const stats = fs.statSync(path.resolve(__dirname, "src", dir));
    return stats.isDirectory() && fs.existsSync(path.resolve(__dirname, "src", dir, "index.tsx"));
  });

// Create entries for each component
const entries: Record<string, string> = {};
components.forEach(component => {
  entries[component] = path.resolve(__dirname, "src", component, "index.tsx");
});

// Add main entry point
entries.index = path.resolve(__dirname, "src/index.ts");

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      include: ["src/**/*"],
      outDir: "dist",
      insertTypesEntry: true,
    }),
    eslint(),
    {
      name: 'cleanup-flat-dts',
      closeBundle() {
        // Remove flat .d.ts files
        const distDir = path.resolve(__dirname, 'dist');
        const files = fs.readdirSync(distDir);
        files.forEach(file => {
          if (file.endsWith('.d.ts') && !file.includes('/')) {
            fs.unlinkSync(path.join(distDir, file));
          }
        });
      }
    }
  ],

  build: {
    lib: {
      entry: entries,
      formats: ["es"],
      fileName: (format, entryName) => {
        if (entryName === 'index') {
          return 'index.js';
        }
        return `${entryName}/index.js`;
      },
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "@radix-ui/react-slot",
        "class-variance-authority",
        "@radix-ui/react-dialog",
        "@radix-ui/react-label",
        "@radix-ui/react-select",
        "@radix-ui/react-tabs",
        "@radix-ui/react-toast",
        "@radix-ui/react-tooltip",
        "@radix-ui/react-popover",
        "@radix-ui/react-dropdown-menu",
        "@radix-ui/react-navigation-menu",
        "@radix-ui/react-accordion",
        "@radix-ui/react-alert-dialog",
        "@radix-ui/react-aspect-ratio",
        "@radix-ui/react-avatar",
        "@radix-ui/react-checkbox",
        "@radix-ui/react-collapsible",
        "@radix-ui/react-context-menu",
        "@radix-ui/react-hover-card",
        "@radix-ui/react-menubar",
        "@radix-ui/react-progress",
        "@radix-ui/react-radio-group",
        "@radix-ui/react-scroll-area",
        "@radix-ui/react-separator",
        "@radix-ui/react-slider",
        "@radix-ui/react-switch",
        "@radix-ui/react-toggle",
        "@radix-ui/react-toggle-group",
        "sonner",
        "lucide-react",
        "clsx",
        "tailwind-merge",
        "tailwindcss-animate",
        "@hookform/resolvers",
        "react-hook-form",
        "zod",
        "date-fns",
        "embla-carousel-react",
        "cmdk",
        "react-day-picker",
        "react-resizable-panels",
        "react-number-format",
        "react-otp-input",
        "react-table",
        "react-paginate",
        "react-select",
        "react-multi-select-component",
        "react-calendar",
        "react-beautiful-dnd",
        "react-dnd",
        "react-dnd-html5-backend",
        "react-dnd-touch-backend",
        "react-draggable",
        "react-resizable",
        "react-sortablejs",
        "react-sortable-hoc",
        "react-sortable-tree",
        "react-sortable-tree-theme-file-explorer",
        "react-sortable-tree-theme-minimal",
        "react-sortable-tree-theme-modern",
        "react-sortable-tree-theme-material-ui",
        "react-sortable-tree-theme-bootstrap",
        "react-sortable-tree-theme-antd",
        "react-sortable-tree-theme-bulma",
        "react-sortable-tree-theme-foundation",
        "react-sortable-tree-theme-semantic-ui",
        "react-sortable-tree-theme-spectre",
        "react-sortable-tree-theme-tachyons",
        "react-sortable-tree-theme-tailwind",
        "react-sortable-tree-theme-windi",
        "react-sortable-tree-theme-unstyled",
        "react-sortable-tree-theme-custom",
        "react-sortable-tree-theme-none",
        "react-sortable-tree-theme-default",
        "react-sortable-tree-theme-basic",
        "react-sortable-tree-theme-simple",
        "react-sortable-tree-theme-minimal",
        "react-sortable-tree-theme-file-explorer",
        "react-sortable-tree-theme-modern",
        "react-sortable-tree-theme-material-ui",
        "react-sortable-tree-theme-bootstrap",
        "react-sortable-tree-theme-antd",
        "react-sortable-tree-theme-bulma",
        "react-sortable-tree-theme-foundation",
        "react-sortable-tree-theme-semantic-ui",
        "react-sortable-tree-theme-spectre",
        "react-sortable-tree-theme-tachyons",
        "react-sortable-tree-theme-tailwind",
        "react-sortable-tree-theme-windi",
        "react-sortable-tree-theme-unstyled",
        "react-sortable-tree-theme-custom",
        "react-sortable-tree-theme-none",
        "react-sortable-tree-theme-default",
        "react-sortable-tree-theme-basic",
        "react-sortable-tree-theme-simple"
      ],
      output: {
        format: 'es',
        exports: 'named',
        chunkFileNames: 'lib/[name].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'ui.css';
          return '[name][extname]';
        },
        manualChunks: (id) => {
          if (id.includes('src/lib')) {
            return 'lib';
          }
        },
      },
    },
    emptyOutDir: true,
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});

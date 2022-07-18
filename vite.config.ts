import path from "node:path";
import { defineConfig } from "vite";
import React from "@vitejs/plugin-react";
import Pages from "vite-plugin-pages";
import AutoImport from "unplugin-auto-import/vite";
import { VitePluginFonts } from "vite-plugin-fonts";
import Unocss from "unocss/vite";
import Yaml from "@rollup/plugin-yaml";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [
    Unocss("./uno.config.ts"),

    React(),

    Pages(),

    AutoImport({
      imports: [
        "react",
        {
          "react-i18next": [
            "useTranslation",
          ],
        },
      ],
      dts: "src/auto-imports.d.ts",
    }),

    VitePluginFonts({
      google: {
        families: [
          {
            name: "Roboto",
            styles: "wght@100;300;400;500;700;900",
          },
        ],
      },
    }),

    Yaml(),
  ],
});

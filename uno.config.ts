import { defineConfig, presetAttributify, presetIcons, presetUno } from "unocss";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import transformerCompileClass from "@unocss/transformer-compile-class";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        "display": "inline-block",
        "height": "1.4em",
        "width": "1.4em",
        "vertical-align": "text-bottom",
      },
    }),
  ],
  transformers: [
    transformerVariantGroup(),
    transformerCompileClass(),
  ],
});

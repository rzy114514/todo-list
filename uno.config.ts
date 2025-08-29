import {
  defineConfig,
  presetWind4,
  presetAttributify,
  transformerAttributifyJsx,
} from "unocss";

export default defineConfig({
  presets: [presetWind4(), presetAttributify()],
  transformers: [transformerAttributifyJsx()],
  theme: {
    fontFamily: {
      sans: ["Segoe UI", "SegoeUI", "Microsoft YaHei", "sans-serif"],
      normal: ["Segoe UI", "SegoeUI", "Microsoft YaHei", "sans-serif"],
    },
  },
});

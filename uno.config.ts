import {
  defineConfig,
  presetWind4,
  presetAttributify,
  transformerAttributifyJsx,
} from "unocss";

export default defineConfig({
  presets: [presetWind4(), presetAttributify()],
  transformers: [transformerAttributifyJsx()],
});

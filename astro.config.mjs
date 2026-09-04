// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://kamenrbti.com.ua",
  integrations: [sitemap()],
  fonts: [
    {
      provider: fontProviders.bunny(),
      name: "Literata",
      cssVariable: "--font-literata",
      weights: [400, 700],
      styles: ["normal", "italic"],
      subsets: ["latin", "cyrillic", "cyrillic-ext"],
    },
  ],
});

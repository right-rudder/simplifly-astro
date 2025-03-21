import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://simpliflyco.com/",
  integrations: [tailwind(), partytown(), sitemap(), react()],
  redirects: {
    "/posts/[...slug]": "/blog/[...slug]",
  },
});

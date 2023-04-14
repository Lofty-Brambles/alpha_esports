import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import prefetch from "@astrojs/prefetch";
import purgecss from "astro-purgecss";
import svelte from "@astrojs/svelte";
const loadSite = () => {
  const mode = import.meta.env.MODE;
  const {
    PUBLIC_URL,
    LOCAL_URL
  } = loadEnv(mode, process.cwd(), "");
  return mode === "development" ? LOCAL_URL : PUBLIC_URL;
};


// https://astro.build/config
export default defineConfig({
  integrations: [compress(), sitemap(), robotsTxt(), prefetch(), purgecss(), svelte()],
  site: loadSite()
});
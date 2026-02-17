// @ts-check
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';
import node from '@astrojs/node';


// https://astro.build/config
export default defineConfig({
  integrations: [vue()], 
  session: {
    driver: "redis",
  },
    output: "server", 
     adapter: node({
    mode: 'standalone',    // atau 'server', tapi 'standalone' enak buat VPS
  }),
  server: {
    host: '0.0.0.0',
    port: 4322,
  },
  vite: {
    optimizeDeps: {
      // Pre-bundle dependency client sejak startup agar tidak sering re-optimize saat pindah halaman.
      entries: ["src/pages/**/*.astro", "src/vue/**/*.vue"],
      include: [
        "vue",
        "@astrojs/vue/client.js",
        "bootstrap",
        "sweetalert2",
        "vue-flatpickr-component",
        "@vueform/multiselect",
        "apexcharts",
        "vue3-apexcharts",
        "vue-router",
      ],
    },
  },

});

 

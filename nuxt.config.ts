// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: { strict: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Inter: { wght: [300, 400, 500] },
      Poppins: {
        wght: [300, 400, 600, 800],
      },
    },
    useStylesheet: true,
  },
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts: {
    families: {
      'Poppins': [400, 500, 700],
    },
    download: true,
  },
  modules: [
    'nuxt-icon',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    ['@nuxtjs/google-fonts', {
      families: {
        Poppins: [400, 500, 700],
      },
    }]
  ],
})

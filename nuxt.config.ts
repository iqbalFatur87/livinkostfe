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
  modules: [
    'nuxt-icon',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    ['@nuxtjs/google-fonts', {
      families: {
        wght: [400, 500, 700],
      },
      subsets: ['latin'],
      display: 'swap',
      download: true,
      preconnect: true,
      preload: false,
      base64: false,
    }]
  ],
})

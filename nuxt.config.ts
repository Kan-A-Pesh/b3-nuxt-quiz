// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/eslint', 'nuxt-lucide-icons', '@nuxtjs/tailwindcss'],
  app: {
    rootTag: 'body',
    rootId: 'app',
  },
})

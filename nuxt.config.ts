// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [
    {
      path: '~/components',
    }
  ],
  app: {
    head: {
      title: '감정 일기장',
      meta: [{name: 'description', content: 'Nuxt 3 fore beginners'}],
    },
    pageTransition: {name: 'page', mode: 'out-in'}
  },
  modules: ['@pinia/nuxt'],
})

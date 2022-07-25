import { defineNuxtConfig } from 'nuxt'

const isProd = process.env.NODE_ENV === 'production'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: ['@pinia/nuxt'],

  // production config for 'nuxt generate'
  ...(isProd && {
    ssr: false,
    nitro: {
      prerender: {
        routes: ['/', '/form', '/form/contact-info', '/form/membership', '/form/overview']
      }
    },
    app: {
      baseURL: '/nuxt3-contact-form/'
    }
  })
})

// import { createPersistedStatePlugin } from 'pinia-plugin-persistedstate-2'
import { createNuxtPersistedState } from 'pinia-plugin-persistedstate'
import { defineNuxtPlugin, useCookie } from '#app'

export default defineNuxtPlugin(({ $pinia }) => {
  $pinia.use(createNuxtPersistedState(useCookie,  {}))
})

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/strapi'],
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    prefix: '/api',
    cookie: {},
    cookieName: 'strapi_jwt'
  },

  // runtimeConfig
  // https://v3.nuxtjs.org/api/configuration/nuxt-config#runtimeconfig
  // The value of this object is accessible from server only using useRuntimeConfig. 
  // It mainly should hold private configuration which is not exposed on the frontend.
  // Variables that need to be accessible on the server are added directly inside runtimeConfig. 
  // Variables that need to be accessible on both the client and the server are defined in runtimeConfig.public.
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL || '/api'
    }
    
  },

})

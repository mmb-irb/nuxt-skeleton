// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  router: { 
    options: { strict: true } 
  },
  devtools: { enabled: true },
  modules: ['@invictus.codes/nuxt-vuetify'],
  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      // @TODO: list all vuetify options
      theme: {
        themes: {
          light: {
            dark: false,
            colors: {
              primary: '#ff0000'
            }
          },
        },
      },
    },
    moduleOptions: {
      /* nuxt-vuetify module options */
      // treeshaking: true | false,
      // useIconCDN: true | false,

      /* vite-plugin-vuetify options */
      // styles: true | 'none' | 'expose' | 'sass' | { configFile: string },
      // autoImport: true | false,
      // useVuetifyLabs: true | false,
    }
  },
  app: {  
    baseURL: process.env.APP_TYPE == 'staging' ? '/webdev3/nuxt-skeleton/' : '/nuxt-skeleton/',
    head: {
      titleTemplate: '%s - Nuxt Skeleton',
      meta: [ 
        { name: 'description', content: 'Nuxt Skeleton project description' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Open+Sans' },
        { rel: 'icon', type: 'image/x-icon', href: `${process.env.APP_TYPE === 'staging' ? '/webdev3/nuxt-skeleton/' : '/nuxt-skeleton/'}favicon.ico` },
      ]
    },
  },
  css: [
    '~/assets/css/main.css'
  ],
  components: [
    { path: '~/components/common', extensions: ['vue'] },
    { path: '~/components/projects', extensions: ['vue'] }
  ],
  plugins: [
    // define here all plugins in nested folders
  ],
  runtimeConfig: {
    public: {
      apiBase: '/api',
      apiEndPoints: [
        '/api', 
        '/api/projects',
        '/^\/api\/projects\/[a-zA-Z0-9\_\.]+$/',
      ]

      /*url: process.env.APP_TYPE == 'development' ? `http://${process.env.APP_DEVELOPMENT_HOST}/` : process.env.APP_TYPE == 'staging' ? `https://${process.env.APP_STAGING_HOST}/` : `https://${process.env.APP_PRODUCTION_HOST}/`,
      externalApi: process.env.MAIN_API_URL,
      apiBase: '/api',
      apiHost: process.env.APP_TYPE == 'development' ? process.env.APP_DEVELOPMENT_HOST : process.env.APP_TYPE == 'staging' ? process.env.APP_STAGING_HOST : process.env.APP_PRODUCTION_HOST,
      */
    }
  },
})
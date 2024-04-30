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
  nitro: {
    plugins: ['~/server/index.js'],
  },
  app: {  
    // modify baseURL depending on the server where the app is running
    baseURL: process.env.APP_TYPE == 'staging' ? '/nuxt-skeleton/' : '/nuxt-skeleton/',
    head: {
      titleTemplate: '%s - Nuxt Skeleton',
      meta: [ 
        { name: 'description', content: 'Nuxt Skeleton document description' }
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
    { path: '~/components/documents', extensions: ['vue'] },
    { path: '~/components/viewer', extensions: ['vue'] }
  ],
  plugins: [
    // define here all plugins in nested folders
  ],
  runtimeConfig: {
    mongodbUri: (!process.env.DB_LOGIN || !process.env.DB_PASSWORD) ?
                `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}` :
                `mongodb://${process.env.DB_LOGIN}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}?authSource=admin`,
    public: {
      // enable when production / staging in server
      //protocol: process.env.APP_TYPE == 'development' ? 'http' : 'https',
      // enable when production / staging in docker
      protocol: 'http',
      apiHost: process.env.APP_TYPE == 'development' ? process.env.APP_DEVELOPMENT_HOST : process.env.APP_TYPE == 'staging' ? process.env.APP_STAGING_HOST : process.env.APP_PRODUCTION_HOST,
      apiBase: '/api',
      apiEndPoints: [
        '/api', 
        '/^\/api\/documents(\\/)?(\\?[\\w=&]+)?$/', 
        '/^\/api\/documents\/[a-zA-Z0-9\_\.]+$/',
        '/^\/api\/files\/[a-zA-Z0-9\_\.]+$/',
      ]
    }
  },
})
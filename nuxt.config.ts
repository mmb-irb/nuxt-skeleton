import fs from 'fs';
import path from 'path';

// modify baseURL depending on the server where the app is running
const baseURL = process.env.APP_TYPE == 'development' ? process.env.BASE_URL_DEVELOPMENT : process.env.APP_TYPE == 'staging' ? process.env.BASE_URL_STAGING : process.env.BASE_URL_PRODUCTION

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  router: { 
    options: { strict: true } 
  },
  devtools: { enabled: true },
  //modules: ['@invictus.codes/nuxt-vuetify'],
  //css: ['vuetify/lib/styles/main.sass'],
  build: {
    transpile: ['vuetify']
  },
  vite: {
    define: {
      'process.env.DEBUG': false
    }
  },
  /*vuetify: {
    // vuetify options
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
      // nuxt-vuetify module options
      // treeshaking: true | false,
      // useIconCDN: true | false,

      // vite-plugin-vuetify options
      // styles: true | 'none' | 'expose' | 'sass' | { configFile: string },
      // autoImport: true | false,
      // useVuetifyLabs: true | false,
    }
  },*/
  nitro: {
    plugins: ['~/server/index.js'],
  },
  app: {  
    baseURL: baseURL,
    head: {
      titleTemplate: '%s - Nuxt Skeleton',
      meta: [ 
        { name: 'description', content: 'Nuxt Skeleton document description' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Open+Sans' },
        { 
          rel: 'icon', 
          type: 'image/x-icon', 
          href:  process.env.CUSTOM === 'true' ? `${baseURL}custom_favicon.ico` : `${baseURL}favicon.ico` },
      ]
    },
  },
  css: [
    '~/assets/css/main.css',
    ...(fs.existsSync(path.resolve(__dirname, 'config/custom.css')) && process.env.CUSTOM === 'true'
      ? [path.resolve(__dirname, 'config/custom.css')] 
      : []),
    '@mdi/font/css/materialdesignicons.min.css', // Only for webfont option
    'vuetify/lib/styles/main.css'
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
                `mongodb://${process.env.DB_LOGIN}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}?authSource=${process.env.DB_AUTHSOURCE}`,
    public: {
      logoUrl: process.env.CUSTOM === 'true' ? `${baseURL}img/custom_logo.png` : `${baseURL}img/logo.png`,
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
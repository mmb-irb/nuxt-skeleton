export default defineNuxtPlugin(() => {
    return {
        provide: {
          globals: {
            shortName: 'Nuxt Skeleton'
        }
      }
    }
})
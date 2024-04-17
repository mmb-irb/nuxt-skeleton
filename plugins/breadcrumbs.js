export default defineNuxtPlugin(() => {
  return {
    provide: {
      breadcrumbs: {
        'first-level': (section) => [
          {
          title: 'About',
          disabled: false,
          to: '/',
          },
          {
            title: section,
            disabled: true
          }
        ],
        'second-level': (section, title, pth) => [
          {
          title: 'About',
          disabled: false,
          to: '/',
          },
          {
            title: section,
            disabled: false,
            to: `/${pth}`
          },
          {
            title: title,
            disabled: true
          },
        ]
      },
    }
  }
})
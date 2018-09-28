module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'CSS Frankfurt',
      description: 'English CSS Frankfurt'
    },
    '/de/': {
      lang: 'de-DE',
      title: 'CSS Frankfurt',
      description: 'German CSS Frankfurt'
    }
   },
  themeConfig: {
    logo: '/logo.svg',
    locales: {
      '/': {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'English',
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        // algolia docsearch options for current locale
        algolia: {},
        displayAllHeaders: true,
        sidebarDepth: 2,
        nav: [
          { text: 'Meetup', link: 'https://meetup.com/cssfrankfurt' },
          { text: 'Forums', link: 'https://spectrum.chat/cssfrankfurt' },
          { text: 'Contribute!', link: 'https://github.com/cssfrankfurt' }
        ],
        sidebar: [
          '/',
          {
            title: 'Events',
            collapsable: false,
            children: [
              '/events/upcoming',
              '/events/past'
            ]
          },
          {
            title: 'Resources',
            collapsable: false,
            children: [
              '/coc/coc',
              '/coc/rg',
            ]
          },

        ]
      },
      '/de/': {
        selectText: 'Sprachen',
        label: 'Deutsch',
        editLinkText: ' ',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        nav: [
          {
            text: 'DE Events',
            link: '/de/events/',
          },
          {
            text: 'DE Resources',
            link: '/de/resources/'
          },
          {
            text: 'DE Meetup',
            link: 'https://meetup.com/vuejsfrankfurt'
          }
        ],
        algolia: {},
        sidebar: {
          '/zh/': [/* ... */],
          '/zh/nested/': [/* ... */]
        }
      }
    }
  }
}
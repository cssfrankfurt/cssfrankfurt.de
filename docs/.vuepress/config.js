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
        nav: [
          { text: 'Meetup', link: 'https://meetup.com/cssfrankfurt' }
        ],
        sidebar: [
          '/',
          {
            title: 'About',
            collapsable: false,
            children: [
              '/about/about',
              '/about/team',
              '/about/sponsors',
              '/about/coc',
              '/about/reporting',
            ]
          },
          {
            title: 'Events',
            collapsable: false,
            children: [
              '/events/upcoming',
              '/events/past',
              '/events/locations',
              '/events/conferences'
            ]
          },
          {
            title: 'Community',
            collapsable: false,
            children: [
              '/community/involved',
              '/community/community',
              '/community/frankconf'
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
        algolia: {},
        displayAllHeaders: true,
        sidebarDepth: 2,
        nav: [
          { text: 'Meetup', link: 'https://meetup.com/cssfrankfurt' }
        ],
        sidebar: [
          '/',
          {
            title: 'Veranstaltungen',
            collapsable: false,
            children: [
              '/de/events/upcoming',
              '/de/events/past'
            ]
          },
          {
            title: 'Ressourcen',
            collapsable: false,
            children: [
              '/de/locations',
              '/de/sponsors',
              '/de/coc/coc',
              '/de/coc/rg',
            ]
          },
        ]
      }
    }
  }
}
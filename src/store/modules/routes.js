const state = {
  home: {
    name: 'Home',
    path: '/',
    title: 'Latest events',
    description: 'CSS Frankfurt is a meetup community for anyone interested in CSS and design on the web. Join us at one of our events to get to know our community. We hope to see you around!'
  },
  about: {
    name: 'About',
    path: '/about',
    title: 'About CSS Frankfurt',
    description: `CSS Frankfurt is a meetup community with a focus on CSS. We organise social events, talks and workshops. We are based out of ` + `<a class="external" href="https://die-zentrale-ffm.de/">` + `Die Zentrale Coworking` + `</a>` + ` in Bornheim, but would love to explore other venues in Frankfurt. If you would like to offer a helping hand to CSS Frankfurt, become a sponsor or just say hi, please reach out to us on any of our social media channels. We would love to hear from you!`
  }
}

export default {
  namespaced: true,
  state
}

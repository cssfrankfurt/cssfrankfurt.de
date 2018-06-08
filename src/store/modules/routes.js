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
    description: 'CSS Frankfurt is a meetup community for anyone interested in CSS and design on the web! Take a look around to get to know us.'
  },
  events: {
    name: 'Events',
    path: '/events',
    title: 'Events',
    description: 'CSS Frankfurt events consist of talks and workshops dedicated to CSS, as well as social coding nights where we get together and have fun with coding.'
  },
  contact: {
    name: 'Contact',
    path: '/contact',
    title: 'Get in touch',
    description: 'We would love to hear from you if you have any questions, concerns or suggestions. Fill out our contact form or and we will get back to you as soon as possible. You can also reach out to us on any of our social media channels.'
  }
  // resources: {
  //   name: 'resources',
  //   path: '/resources',
  //   title: 'Resources',
  //   description: 'Would you like to help out with CSS Frankfurt, become a sponsor, submit a talk proposal, ask a question or just say hi? You\'ve come to the right place. Fill out our contact form and we will get back to you as soon as possible!'
  // }
}

export default {
  namespaced: true,
  state
}

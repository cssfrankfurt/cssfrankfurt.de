const state = {
  home: {
    name: 'Home',
    path: '/',
    title: 'Welcome to CSS Frankfurt!',
    description: 'CSS Frankfurt organises talks, workshops and social coding nights for everyone with an interest in CSS, regardless of skill level. Take a look around to find out more about what we are currently up to!'
  },
  about: {
    name: 'About',
    path: '/about',
    title: 'About',
    description: 'CSS Frankfurt is a meetup community for anyone interested in CSS and design on the web. Our events conists of talks and workshops dedicated to CSS, as well as social coding nights where we get together and have fun with CSS. CSS Frankfurt welcomes coders of all skill levels. We hope to see you at our events!'
  },
  events: {
    name: 'Events',
    path: '/events',
    title: 'Events',
    description: 'CSS Frankfurt organises talks, workshops and social coding nights all dedicated to CSS. At our events you can also find Frank stickers, that you can keep for yourself or spread them around the world to help Frank towards world domination (#adventurefrank #cssfrankfurt)! If you have any questions about our events or have any suggestions for us, please get in touch with us. We hope to see you around!'
  },
  contact: {
    name: 'Contact',
    path: '/contact',
    title: 'Contact',
    description: 'Would you like to help out with CSS Frankfurt, become a sponsor, submit a talk proposal, ask a question or just say hi? You\'ve come to the right place. Fill out our contact form and we will get back to you as soon as possible!'
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

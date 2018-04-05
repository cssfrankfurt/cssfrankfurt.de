const state = {
  about: {
    frank: {
      title: 'Frank',
      content:
      "In case you're wondering what CSS has in common with a cat, you simply have to examine the relationship you often have with CSS, and compare it to the human/cat relationship. It's all about love and hate, and that's where Frank comes in!",
      adventure: {
        content:
          'Frank is currently working on a small project. Frank wants to take over the world and needs your help! Frank has been very kind and ordered us all some stickers that needs to be spread all around the world! Come along to one of our events to pick up some stickers that you can put up around wherever you go and use these tags:',
        tags: '#adventurefrank #cssfrankfurt'
      },
      profiles: [
        {
          name: 'Frank Furt',
          title: 'Offical Mascat, CSS Frankfurt',
          quote:
          'I am Curious. I am Adventurous. I am Talented. So I guess that makes me a C.A.T',
          img: require('@/assets/frank.svg'),
          meetup: 'https://meetup.com/cssfrankfurt',
          twitter: 'https://twitter.com/cssfrankfurt',
          medium: 'https://medium.com/cssfrankfurt',
          instagram: 'https://instagram.com/cssfrankfurt',
          github: 'https://github.com/cssfrankfurt',
          codepen: 'https://codepen.io/cssfrankfurt/'
        }
      ]
    },
    organisers: {
      title: 'Organisers',
      content: 'CSS Frankfurt is currently organised by three friends loyal to Frank. As a thank you, Frank gifted each of them a hoodie with their personal Frank clone printed on the back. If you would like to help organise CSS Frankfurt, there is always help needed, so please reach out to us!',
      profiles: [
        {
          name: 'Melana Grönert',
          title: 'Front-End Developer',
          company: 'DB Systel',
          img: require('@/assets/melana.gif'),
          quote:
          'Be bold or italic, but never be regular. Talk to me about hackathons, scrum, motorcycles and BI software mashups!',
          twitter: 'https://twitter.com/katradical',
          github: 'https://github.com/kat-radical',
          xing: 'https://www.xing.com/profile/Melana_Groenert'
        },
        {
          name: 'Victoria Bergquist',
          title: 'Front-End Developer',
          company: 'melsicon',
          img: require('@/assets/victoria.gif'),
          quote:
          'Twitter is my safespace. I like to make silly things with CSS! Mother of Cats.',
          twitter: 'https://twitter.com/vicbergquist',
          codepen: 'https://codepen.io/vicbergquist/',
          github: 'https://github.com/vicbergquist',
          linkedin: 'https://www.linkedin.com/in/victoriabergquist/',
          youtube: 'https://www.youtube.com/victoriabergquist',
          external: 'https://mountainstick.com'
        },
        {
          name: 'Steffen Henschel',
          title: 'Front-End Developer',
          company: 'INNOQ',
          img: require('@/assets/steffen.gif'),
          quote: 'Star gazing at night, coding during day — and vice versa. If none of the above applies, find me on my bike',
          twitter: 'https://twitter.com/blynxical',
          github: 'https://github.com/blynx',
          xing: 'https://www.xing.com/profile/Steffen_Henschel5',
          external: 'http://www.steffenhenschel.com'
        }
      ]
    }
  }
}

const getters = {
  about() {
    return state.about
  }
}

export default {
  namespaced: true,
  state,
  getters
}

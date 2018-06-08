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

      ]
    },
    organisers: {
      title: 'Organisers',
      content: 'CSS Frankfurt is currently organised by four friends loyal to Frank. As a thank you, Frank gifted each of them a hoodie with their personal Frank clone printed on the back. If you would like to help organise CSS Frankfurt, there is always help needed, so please reach out to us!',
      profiles: [
        {
          name: 'Melana Grönert',
          title: 'Front-End Developer',
          company: 'DB Systel',
          img: require('@/0_assets/melana.gif'),
          quote:
          'Be bold or italic, but never be regular. Talk to me about hackathons, Scrum and BI-software mashups!',
          socialmedia: {
            twitter: 'https://twitter.com/katradical',
            github: 'https://github.com/kat-radical',
            xing: 'https://www.xing.com/profile/Melana_Groenert'
          }
        },
        {
          name: 'Victoria Bergquist',
          title: 'Front-End Developer',
          company: 'melsicon',
          img: require('@/0_assets/victoria.gif'),
          quote:
          'Sharks are just ugly dolphins! CSS all day, every day.',
          socialmedia: {
            twitter: 'https://twitter.com/vicbergquist',
            codepen: 'https://codepen.io/vicbergquist/',
            github: 'https://github.com/vicbergquist',
            'linkedin-in': 'https://www.linkedin.com/in/victoriabergquist/',
            youtube: 'https://www.youtube.com/victoriabergquist'
          }
        },
        {
          name: 'Steffen Henschel',
          title: 'Front-End Developer',
          company: 'INNOQ',
          img: require('@/0_assets/steffen.gif'),
          quote: 'Star gazing at night, coding during day — and vice versa. If none of the above applies, find me on my bike!',
          socialmedia: {
            twitter: 'https://twitter.com/blynxical',
            github: 'https://github.com/blynx',
            xing: 'https://www.xing.com/profile/Steffen_Henschel5'
          }
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

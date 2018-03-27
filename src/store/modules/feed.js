import axios from 'axios'

const state = {
  feed: [
    {
      title: 'Say Hello to CSS Frankfurt',
      milli: '1520809200000',
      date: '12/03/2018',
      type: 'article',
      where: 'medium',
      url: 'https://hallofrankfurt.de/say-hello-to-css-frankfurt-10e1bb6af1e9',
      description:
        'I’m excited to introduce you to the first and only meetup in Frankfurt dedicated to CSS (Cascading Style Sheets), CSS Frankfurt. This meetup is for anyone interested in CSS, whether you are a beginner, professional or somewhere in between. CSS Frankfurt is organised by Melana, Steffen and Victoria and our goal is to create a new fun and engaging tech community in Frankfurt.'
    }
  ]
}

/* ===== GETTERS ===== */
const getters = {
  feed() {
    return state.feed
  }
}

/* ===== ACTIONS ===== */
const actions = {
  // FETCH EVENTS FROM MEETUP API
  async FETCH_FEED({commit}) {
    try {
      const response = await axios.get(
        'https://37vqk7ncii.execute-api.us-east-1.amazonaws.com/events'
      )
      commit('RECEIVE_FEED', {data: response.data.results})
    } catch (error) {
      console.log(error)
    }
  }
}

/* ===== MUTATIONS ===== */
const mutations = {
  RECEIVE_FEED(state, {data}) {
    data.forEach(singleEvent => {
      state.feed.push({
        title: singleEvent.name,
        date: new Date(singleEvent.time).toLocaleDateString('en-GB'),
        milli: singleEvent.time,
        description: singleEvent.description,
        location: singleEvent.venue.name,
        url: singleEvent.event_url,
        status: singleEvent.status,
        type: 'event',
        where: 'meetup'
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

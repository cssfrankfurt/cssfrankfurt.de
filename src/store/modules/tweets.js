import axios from 'axios'

const state = {
  tweets: []
}

/* ===== GETTERS ===== */
const getters = {
  tweets() {
    return state.tweets
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

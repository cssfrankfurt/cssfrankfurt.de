import axios from 'axios'

const state = {
  events: []
}

/* ===== GETTERS ===== */
const getters = {
  events() {
    return state.events
  }
}

/* ===== ACTIONS ===== */
const actions = {
  // FETCH EVENTS FROM MEETUP API
  async FETCH_EVENTS({commit}) {
    try {
      const response = await axios.get(
        'https://37vqk7ncii.execute-api.us-east-1.amazonaws.com/events'
      )

      commit('RECEIVE_EVENTS', {data: response.data.results})
    } catch (error) {
      console.log(error)
    }
  }
}

/* ===== MUTATIONS ===== */
const mutations = {
  RECEIVE_EVENTS(state, {data}) {
    console.log(data)
    for (let event of data) {
      state.events.push({
        type: 'meetup',
        name: event.name,
        ms: event.time,
        description: event.description,
        status: event.status,
        img: event.photo_url,
        url: event.event_url,
        info: {
          date:
          new Date(event.time).toLocaleDateString('en-GB') +
          ' @ ' +
          new Date(event.time)
            .toLocaleTimeString('en-GB')
            .substring(0, 5),
          location: event.venue.name,
          attending: event.yes_rsvp_count
        }
      })
    }
    // Sort events by date
    // state.events.sort((a, b) => {
    //  return a.ms, b.ms
    // })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

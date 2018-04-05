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
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ]
    data.forEach(singleEvent => {
      state.events.push({
        title: singleEvent.name,
        date:
          new Date(singleEvent.time).toLocaleDateString('en-GB') +
          ' (' +
          days[new Date(singleEvent.time).getDay()] +
          ')' +
          ' @ ' +
          new Date(singleEvent.time)
            .toLocaleTimeString('en-GB')
            .substring(0, 5),
        milli: singleEvent.time,
        description: singleEvent.description,
        location: singleEvent.venue.name,
        attending: singleEvent.yes_rsvp_count,
        status: singleEvent.status,
        url: singleEvent.event_url
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

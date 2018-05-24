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
  async FETCH_USER_TWEETS({commit}) {
    try {
      const response = await axios.get(
        'https://hpteg5u9ub.execute-api.us-east-1.amazonaws.com/tweets'
      )
      commit('RECEIVE_TWEETS', {data: response.data})
    } catch (error) {
      console.log(error)
    }
  },
  async FETCH_HASHTAGS({commit}) {
    try {
      const response = await axios.get(
        'https://qkwbqp2lbd.execute-api.us-east-1.amazonaws.com/hashtags'
      )
      commit('RECEIVE_TWEETS', {data: response.data.statuses})
    } catch (error) {
      console.log(error)
    }
  }
}

/* ===== MUTATIONS ===== */
const mutations = {
  RECEIVE_TWEETS(state, {data}) {
    // Filter out tweets with same ID
    let tweets = data.filter((tweet, index, self) => self.findIndex(
      (t) => { return (t.id === tweet.id && t.id === tweet.id) }) === index)
    // Add filtered tweets to state
    for (let tweet of tweets) {
      state.tweets.push({
        type: 'twitter',
        name: tweet.user.name,
        user: '@' + tweet.user.screen_name,
        description: tweet.text,
        id: tweet.id,
        ms: new Date(tweet.created_at).getTime(),
        img: tweet.user.profile_image_url_https,
        info: {
          date: new Date(tweet.created_at).toLocaleDateString('en-GB'),
          retweets: tweet.retweet_count,
          favorites: tweet.favorite_count
        }
      })
    }
    // Sort tweets by date
    state.tweets.sort((a, b) => {
      return b.ms - a.ms
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

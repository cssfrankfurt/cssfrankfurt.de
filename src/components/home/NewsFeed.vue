<template>
  <ul class="feed">
    <li class="feed-item" v-for="article in filteredFeed" :key="article.date">
      <h2 class="title" title="article.title" ><span role="img" aria-hidden="true">#</span>{{article.title | toID}}</h2>
      <h3 class="info">
        <span class="date" ><calendar-icon class="info-icon" role="img" aria-hidden="true" title="Date:"/>{{article.date}}</span>
        <span class="feed-item-type" ><tag-icon class="info-icon" role="img" aria-hidden="true" title="Type:"/>{{article.type}}</span>
        <span class="past-event" v-if="article.status === 'past'"><info-icon class="info-icon" role="img" aria-hidden="true" title="Type:"/>Past event</span>
      </h3>
      <article class="description" >
        <div class="bracket-deco" role="img" aria-hidden="true" >.description {</div>
          {{article.description | truncate(200)}}
        <div class="bracket-deco" role="img" aria-hidden="true" >}</div>
      </article>
      <a class="external" :href="article.url" >view on {{article.where}}</a>
    </li>
  </ul>
</template>
<script>
// import axios from 'axios'
import {mapGetters} from 'vuex'
import {CalendarIcon, TagIcon, InfoIcon} from 'vue-feather-icons'
export default {
  name: 'NewsFeed',
  components: {
    CalendarIcon,
    TagIcon,
    InfoIcon
  },
  data: () => ({
    more: '#read more'
  }),
  computed: {
    ...mapGetters({
      feed: 'feed/feed'
    }),
    filteredFeed() {
      return this.feed.slice().sort(function(a, b) {
        return b.milli - a.milli
      })
    }
  },
  filters: {
    truncate(value, length) {
      return value.substring(0, length) + '...'
    },
    toID(value) {
      return value.split(' ').join('')
    }
  },
  mounted() {}
}
</script>
<style lang="sass" scoped>

  .fedd-item-type
    text-transform: capitalize

</style>

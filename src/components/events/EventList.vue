<template>
  <ul class="event-list">
    <li class="filter">
      <input id="all" type="radio" v-model="type" value="all"/>
      <label for="all"><span>{{all}}</span></label>
      <input id="upcoming" type="radio" v-model="type" value="upcoming"/>
      <label for="upcoming"><span>{{upcoming}}</span></label>
      <input id="past" type="radio" v-model="type" value="past"/>
      <label for="past"><span>{{past}}</span></label>
    </li>
    <!-- <transition name="fade" mode="out-in" ></transition> -->
    <transition name="fade" mode="out-in">
      <li class="no-events" v-if="type === 'upcoming' && filteredEvents.length === 0" :key="'noevents'">Frank promises something is in the works!</li>
      <li class="event-item" v-for="event in filteredEvents" :key="event.date">
        <h1 class="item-title">{{event.title}}</h1>
        <h3 class="info">
          <span class="date">
            <font-awesome-icon :icon="['far', 'calendar-alt']" class="info-icon" role="img" aria-hidden="true"/>{{event.date}}
            </span>
          <span class="location" v-if="event.status === 'upcoming'">
            <font-awesome-icon :icon="['fas', 'map-marker-alt']" class="info-icon" role="img" aria-hidden="true"/>
            {{event.location}}
            </span>
          <span class="attending" v-if="event.status === 'upcoming'">
            <font-awesome-icon :icon="['fas', 'users']" class="info-icon" role="img" aria-hidden="true"/>
            {{event.attending}}</span>
          <span class="past-event" v-if="event.status === 'past'">
            <font-awesome-icon :icon="['fas', 'info-circle']" class="info-icon" role="img" aria-hidden="true"/>Past event!
          </span>
        </h3>
        <article class="description">
          <!-- <div class="bracket-deco" role="img" aria-hidden="true" >.description {</div> -->
          {{event.description | truncate(200)}}
          <!-- <div class="bracket-deco" role="img" aria-hidden="true" >}</div> -->
        </article>
        <a class="external" :href="event.url"  title="View on meetup">{{more}}</a>
      </li>
    </transition>
  </ul>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'EventList',
  data: () => ({
    upcoming: 'Upcoming',
    all: 'All',
    past: 'Past',
    type: 'all',
    more: 'view on meetup'
  }),
  filters: {
    truncate(value, length) {
      return value.substring(0, length) + '...'
    }
    // toID(value) {
    //   return value.split(' ').join('')
    // }
  },
  computed: {
    ...mapGetters({
      events: 'events/events'
    }),
    filteredEvents() {
      let status = this.type
      if (status === 'all') {
        return this.events
      } else {
        return this.events.filter(singleEvent => {
          return singleEvent.status === status
        })
      }
    },
    errors() {
      if (this.filteredEvents.lentgh === 0 && this.type === 'upcoming') {
        return "Frank promises he's working on something... Stay tuned!"
      } else if (this.filteredEvents.lentgh === 0 && this.type === 'past') {
        return 'There are no past events...'
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="sass" scoped>

  @import "src/assets/styles/style-variables.sass"

  .no-events
    margin: 50px 15px
    text-align: center

  .fade-invert-enter-active
    transition: all .3
    transition-delay: .3s

  .fade-invert-leave-active
    transition: all .3

  .fade-invert-enter, .fade-invert-leave-to
    opacity: 0
    transform: translateY(-15px)

</style>

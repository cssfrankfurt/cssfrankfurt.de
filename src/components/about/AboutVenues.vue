<template>
  <section class="content-container venues">
    <h1 class="section-title"><span role="img" aria-hidden="true">#</span>{{title}}</h1>
    <p class="about">{{content}}</p>
    <div class="venue" v-for="venue in venues" :key="venue.name">
      <h2 class="venue-name">{{venue.name}}</h2>
      <h3 class="address"><MapPinIcon class="info-icon"/>{{venue.address}}</h3>
      <article class="description">{{venue.how}}</article>
    </div>
  </section>
</template>
<script>
import {MapPinIcon} from 'vue-feather-icons'
export default {
  name: 'AboutVenues',
  components: {
    MapPinIcon
  },
  data: () => ({
    title: 'venues',
    content:
      'Our goal is to host venues where it is easy for our members to get to and venues that suit our event types. If you have a venue you think CSS Frankfurt can benefit from, please get in touch with us, we would love to hear from you!',
    venues: [
      {
        name: 'Die Zentrale Coworking',
        address: 'Berger Straße 175, Bornheim',
        how: 'U4 to Bornheim Mitte, Tram 12'
      }
    ]
  })
}
</script>
<style lang="sass" scoped>

  @import "src/assets/styles/style-variables.sass"

  .venue
    margin-top: 30px
    margin-left: 30px

  .venue-name
    font-size: 1.3rem
    color: $pink

  .address
    font-size: 1rem
    font-weight: normal

  .info-icon
    margin-right: 10px
</style>

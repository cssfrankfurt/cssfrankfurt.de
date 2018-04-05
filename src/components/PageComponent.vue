<template>
  <main class="container">
    <h1 class="section-title">
      <span role="img" aria-hidden="true">#</span>
      {{title}}
    </h1>
    <article class="description">{{description}}</article>
      <ListComponent 
        v-if="$route.name ==='home'" 
        :items="tweets"
        :key="'tweets'"
      />

      <ListComponent 
        v-if="$route.path ==='/events'" 
        :items="events"
        :key="'events'"
      />

      <ProfileComponent
        v-if="$route.path === '/about'"
        :title="about.frank.title"
        :adventure="about.frank.adventure"
        :content="about.frank.content"
        :profiles="about.frank.profiles"
        :key="'frank'"
      />

      <ProfileComponent
        v-if="$route.path === '/about'"
        :title="about.organisers.title"
        :content="about.organisers.content"
        :profiles="about.organisers.profiles"
        :key="'organisers'"
      />
</main>
</template>
<script>
import {mapGetters} from 'vuex'
import ListComponent from '@/components/list-components/ListComponent'
import ProfileComponent from '@/components/ProfileComponent'

export default {
  name: 'PageComponent',
  components: {
    ListComponent,
    ProfileComponent
  },
  props: {
    title: {
      default: 'Welcome',
      value: String,
      required: true
    },
    description: {
      default: 'Welcome to CSS Frankfurt! We are a community in the Rhein-Main area dedicated to CSS. Everyone with an interest in CSS and web design, beginner and professional alike, is welcome to our events. We hope to see you around!',
      required: false
    }
  },
  computed: {
    ...mapGetters({
      about: 'about/about',
      tweets: 'tweets/tweets',
      events: 'events/events'
    })
  }
}
</script>

<style lang="sass" scoped>

  @import "src/assets/styles/style-variables.sass"

  .section-title
    font-family: $heading
    text-transform: capitalize
    letter-spacing: 1px
    font-weight: 900
    font-size: 2rem
    flex-basis: 100%

    span
      color: $pink
      margin-right: .5rem 
  
  .description
    margin: 1rem 0

</style>


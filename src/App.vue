<template>
  <div id="app">
    <TheNavigation/>
    <transition name="fade" mode="out-in">
      <TheLoader v-if="loading"/>
      <router-view v-if="!loading"></router-view>
    </transition>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import TheLoader from '@/components/TheLoader'
import TheNavigation from '@/components/navigation/TheNavigation'
import {TwitterIcon} from 'vue-feather-icons'
export default {
  name: 'App',
  components: {
    TheNavigation,
    TwitterIcon,
    TheLoader
  },
  computed: {
    ...mapGetters({
      loading: 'loader/isLoading'
    })
  },
  created() {
    this.$store.dispatch('feed/FETCH_FEED')
    this.$store.dispatch('events/FETCH_EVENTS').then(() => {
      this.$store.commit('loader/setLoading', false)
    })
  }
}
</script>

<style lang="sass">

  @import "src/assets/styles/style-variables.sass"

  *
    margin: 0
    padding: 0
    box-sizing: border-box

  body, html
    font-family: $font
    min-height: 100%
    font-size: 16px
    font-weight: 300
    color: $black
    line-height: 1.5
    @include small
      font-size: 14px

  a, a:visited, a:focus, a:hover
    background: 0
    text-decoration: none

  ul
    list-style-type: none

  button
    background: 0
    border: 0
    font-size: 1rem
  img
    max-height: 100%
    width: auto

  #app
    min-height: 100vh
    background-image: url(./assets/css-confetti.svg)
    background-size: cover
    background-repeat: no-repeat
    background-attachment: fixed

  .container
    position: relative
    max-width: 740px
    margin: 15px auto
    padding: 15px
    background: white
    @include mobile
      margin: 0

  /* SECTION STYLING */

  .content
    padding: 15px

  .section-title
    font-size: 1.7rem
    flex-basis: 100%
    margin-bottom: 15px

    span
      color: $pink
      margin-right: 5px

  .event-item,
    display: flex
    flex-direction: column
    background: white

  .external
    position: relative
    display: block
    font-weight: bold
    color: $pink
    align-self: flex-end
    margin-top: -25px
    text-align: right
    &:hover
      text-decoration: underline

  /* FILTER STYLING */

  .filter
    text-align: right
    z-index: 98
    background: white
    margin: 15px 0
    @include tablet
      margin: 0
      margin-bottom: 30px
    @include mobile
      text-align: center

    input[type="radio"]
      display: none

    input[type="radio"] + label span
      font-size: 14px
      display: inline-block
      padding: 0 5px
      text-align: center

    input[type="radio"]:checked + label span
      font-weight: 700
      border-bottom: 2px solid $pink

  /* CTA BUTTON STYLING */

  .cta
    cursor: pointer
    border-radius: 40px
    border: 2px solid white
    margin-left: 10px
    max-width: 140px

  .cta-inner
    display: grid
    vertical-align: bottom
    color: white
    font-weight: bold
    background: $pink
    height: 100%
    width: 100%
    padding: 10px 15px
    border-radius: 40px
    box-shadow: inset 0px -3px $dark-pink

  .cta:hover .cta-inner
    transform: translate(1px,2px)
    box-shadow: inset 0px -3px transparent

  .cta.router-link-exact-active:hover .cta-inner
    transform: translate(0)
    box-shadow: inset 0px -3px transparent

  .cta.router-link-exact-active
    max-height: 55px
    border: 2px solid $pink

    .cta-inner
      color: $pink
      background: white
      box-shadow: inset 0px -3px transparent

  .comingsoon
    text-align: center
    margin: 15px 0

  /* EVENT LIST AND NEWS FEED STYLING */

  .feed-item, .event-item
    margin-bottom: 20px

  .title
    color: $black
    font-size: 1.4rem
    margin-bottom: 5px
    z-index: 99
    @include mobile
      font-size: 1.2rem

    span
      color: $pink
      margin-right: 5px

  .info
    color: $black
    font-weight: 300
    font-size: 1rem
    vertical-align: baseline
    @include mobile
      margin-left: 0

    span
      margin-right: 15px
      @include mobile
        width: 100%

    .past-event
      font-weight: 700
      @include mobile
        display: block
        margin-top: 5px

    span.location, span.attending
      @include tablet
        display: none

  .bracket-deco
    color: $pink
    font-weight: bold
    margin-left: -30px
    margin-bottom: 5px
    @include mobile
      margin-left: -20px

  .description
    font-size: 1rem
    font-weight: 300
    color: $black
    margin-left: 30px
    margin-bottom: 25px
    margin-top: 5px
    @include mobile
      margin-left: 15px

  .social-icon
    color: $pink
    font-size: 1.5rem
    margin-right: 10px
    transition: transform .1s linear
    vertical-align: baseline
    &:hover
      transform: scale(1.07)

  .info-icon
    color: $pink
    stroke-width: 1.8
    height: 18px
    vertical-align: bottom
    margin-bottom: 3px
    margin-right: 5px

  /* TRANSITIONS */

  .fade-enter-active, .fade-leave-active
    transition: all .3s

  .fade-enter, .fade-leave-to
    opacity: 0
    transform: translateY(15px)

  .loader-enter-active, .loader-leave-active
    transition: opacity .3s

  .loader-enter, .loader-leave-to
    opacity: 0

</style>

<style lang="sass" scoped>
  .loader
    display: flex
    height: 60vh
    justify-content: center
    align-items: center
    flex-direction: column
    text-align: center
    &>div:first-child
      max-width: 80px
      max-height: 120px

  .loader
    animation: load .8s cubic-bezier(.445,.05,.55,.95) infinite forwards

  @keyframes load
    0%, 100%
      transform: translateY(0)
    50%
      transform: translateY(-25px)
</style>

<template>
  <div id="app">
    <TheNavigation/>
    <transition name="fade" mode="out-in">
      <TheLoader v-if="loading"/>
      <router-view v-if="!loading" :key="$route.path"/>
    </transition>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import TheLoader from '@/components/TheLoader'
import TheNavigation from '@/components/navigation/TheNavigation'

export default {
  name: 'App',
  components: {
    TheNavigation,
    TheLoader
  },
  computed: {
    ...mapGetters({
      loading: 'loader/isLoading'
    })
  },
  created() {
    this.$store.dispatch('tweets/FETCH_USER_TWEETS')
    this.$store.dispatch('tweets/FETCH_HASHTAGS')
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
    max-width: 700px
    margin: 1rem auto
    padding: 1rem
    background: white
    @include mobile
      margin: 0 auto

  /* TRANSITIONS */

  .fade-enter-active, .fade-leave-active
    transition: all .3s

  .fade-enter, .fade-leave-to
    opacity: 0
    transform: translateY(1rem)

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

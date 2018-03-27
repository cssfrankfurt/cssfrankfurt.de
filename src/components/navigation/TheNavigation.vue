<template>
  <header class="header" role="banner">
    <TheLogo/>
    <nav role="navigation">
      <router-link class="nav-link" to="/" title="Navigate to home page">Home</router-link>
      <router-link class="nav-link" to="/about" title="Navigate to about page">About</router-link>
      <router-link class="nav-link" to="/events" title="Navigate to events page">Events</router-link>
      <router-link class="nav-link" to="/contact" title="Navigate to contact page">Contact</router-link>
      <button class="cta" @click="submit" v-if="!wXS" role="button" aria-label="submit a talk button">
        <div class="cta-inner">Submit a talk</div>
      </button>
    </nav>
  </header>
</template>
<script>
import TheLogo from '@/components/TheLogo'
export default {
  name: 'TheNavigation',
  components: {
    TheLogo
  },
  data: () => ({}),
  methods: {
    submit() {
      this.$router.push('/contact')
      this.$store.dispatch('getFormType', 'submit')
    }
  },
  mounted() {}
}
</script>
<style lang="sass" scoped>

  @import "src/assets/styles/style-variables.sass"

  .header
    position: sticky
    top: 0
    display: flex
    align-items: center
    padding: 10px
    margin: 0
    justify-content: space-around
    background: white
    z-index: 100
    @include mobile
      justify-content: center
      flex-direction: column
      padding: 10px 0

  nav
    @include mobile
      margin-top: 10px

  a.nav-link
    color: $black
    text-align: center
    font-weight: 900
    min-width: 80px
    display: inline-block
    transition: all .3s linear
    margin: 0 10px
    @include tablet
      min-width: 0
      font-size: 16px
      margin: 0
    @include small
      font-size: 14px

  %nav-link
    color: $pink
    opacity: 0
    transition: opacity .2s ease-in-out

  .nav-link::before
    @extend %nav-link
    content: '{'
    padding-right: 10px
    @include tablet
      padding-right: 5px

  .nav-link::after
    @extend %nav-link
    content: '}'
    padding-left: 10px
    @include tablet
      padding-left: 5px

  .nav-link.router-link-exact-active::before, .nav-link.router-link-exact-active::after
    opacity: 1
</style>

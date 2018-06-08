<template>
  <header class="header" role="banner">
    <the-logo/>
    <nav role="navigation">
      <router-link
        v-for="route in routes"
        :to="route.path"
        class="nav-link"
        role="link"
        :key="route.path">
          {{route.name}}
      </router-link>
      <cta-button
        :title="'Submit a talk'"
      />
    </nav>
  </header>
</template>
<script>
import TheLogo from '@/4_components/navigation/TheLogo'
import CtaButton from '@/4_components/navigation/CtaButton'
export default {
  name: 'Nav',
  components: {
    TheLogo,
    CtaButton
  },
  computed: {
    routes() {
      const store = this.$store.state.routes
      return Object.values(store)
    }
  }
}
</script>
<style lang="sass" scoped>

  @import "src/0_assets/styles/style-variables.sass"

  .header
    flex: 0 1 auto
    position: sticky
    top: 0
    display: flex
    align-items: center
    padding: 1rem 2rem
    justify-content: space-between
    background: white
    z-index: 100
    width: 100%
    @include tablet
      flex-direction: column
    @include mobile
      justify-content: center
      flex-direction: column
      padding: 1rem 0

  nav
    display: flex
    justify-content: space-around
    align-items: baseline
    @include mobile
      width: 100%
      margin-top: 1rem

  a.nav-link
    font-family: $font-body
    color: $black
    text-align: center
    font-weight: 900
    display: inline-block
    transition: all .3s linear
    margin: 0 .5rem
    text-transform: capitalize
    @include mobile
      margin: 0

  %nav-link
    font-family: $font-secondary
    color: $pink
    opacity: 0
    transition: opacity .2s ease-in-out

  .nav-link::before
    @extend %nav-link
    content: '{'
    padding-right: .5rem
    @include tablet
      padding-right: .2rem

  .nav-link::after
    @extend %nav-link
    content: '}'
    padding-left: .5rem
    @include tablet
      padding-left: .2rem

  .nav-link.router-link-exact-active::before, .nav-link.router-link-exact-active::after
    opacity: 1
</style>

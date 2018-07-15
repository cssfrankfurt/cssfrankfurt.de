<template>
    <header class="header" role="banner">
        <the-logo/>
        <nav role="navigation">
            <router-link
                v-for="route in routes"
                :to="route.path"
                :key="route.path"
                class="nav-link"
                role="link">
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
    @include mobile
      justify-content: center
      padding: .5rem 1rem

  nav
    display: flex
    justify-content: space-around
    align-items: baseline
    @include mobile
      justify-content: flex-end
      width: 100%

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

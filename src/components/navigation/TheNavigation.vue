<template>
  <header class="header" role="banner">
    <TheLogo/>
    <nav role="navigation">
      <router-link
        class="nav-link"
        v-for="route in routes"
        :key="route.index"
        :to="{ name: route.name, params: {title: route.title, description: route.description} }"
        >
        {{route.name}}
      </router-link>

      <ButtonComponent/>
    </nav>
  </header>
</template>
<script>
import TheLogo from '@/components/TheLogo'
import ButtonComponent from '@/components/navigation/ButtonComponent'

export default {
  name: 'TheNavigation',
  components: {
    TheLogo,
    ButtonComponent
  },
  data: () => ({
    routes: [
      {
        name: 'home',
        title: 'Welcome',
        description: 'Welcome to CSS Frankfurt! We are a community in the Rhein-Main area dedicated to CSS. Everyone with an interest in CSS and web design, beginner and professional alike, is welcome to our events. We hope to see you around!'
      },
      {
        name: 'about',
        title: 'About',
        description: 'CSS Frankfurt is a meetup community for anyone interested in CSS and design on the web. Our events conists of talks and workshops dedicated to CSS, as well as social coding nights where we get together and have fun with CSS. CSS Frankfurt welcomes people of all skill levels and we are also there for anyone who is just getting started with CSS. We hope to see you at our events! If you have any questions, please reach out to us, we will be happy to help!'
      },
      {
        name: 'events',
        title: 'Events',
        description: 'CSS Frankfurt organises talks, workshops and social coding nights all dedicated to CSS. At our events you can also find Frank stickers, that you can keep for yourself or spread them around the world to help Frank towards world domination (#adventurefrank #cssfrankfurt)! If you have any questions about our events or have any suggestions for us, please get in touch with us. We hope to see you around!'
      },
      {
        name: 'contact',
        title: 'Contact',
        description: "Would you like to help out with CSS Frankfurt, become a sponsor, submit a talk proposal, ask a question or just say hi? You've come to the right place. Fill out our contact form and we will get back to you as soon as possible!"
      }
    ]
  }),
  mounted(){
  }
}
</script>
<style lang="sass" scoped>

  @import "src/assets/styles/style-variables.sass"

  .header
    position: sticky
    top: 0
    display: flex
    align-items: center
    padding: 1rem
    margin: 0
    justify-content: space-around
    background: white
    z-index: 100
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
    color: $black
    text-align: center
    font-weight: 900
    display: inline-block
    transition: all .3s linear
    margin: 0 1rem
    text-transform: capitalize
    @include mobile
      margin: 0

  %nav-link
    color: $pink
    opacity: 0
    transition: opacity .2s ease-in-out

  .nav-link::before
    @extend %nav-link
    content: '{'
    // padding-right: 1rem
    @include tablet
      // padding-right: .2rem

  .nav-link::after
    @extend %nav-link
    content: '}'
    // padding-left: 1rem
    @include tablet
      // padding-left: .2rem

  .nav-link.router-link-exact-active::before, .nav-link.router-link-exact-active::after
    opacity: 1
</style>

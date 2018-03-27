<template>
  <main class="container">
    <h1 class="section-title">{{title}}</h1>
    <article class="description">{{content}}</article>
    <AboutFrank/>
    <AboutOrganisers/>
  </main>
</template>
<script>
import AboutFrank from '@/components/about/AboutFrank'
import AboutOrganisers from '@/components/about/AboutOrganisers'

export default {
  name: 'AboutPage',
  components: {
    AboutOrganisers,
    AboutFrank
  },
  data: () => ({
    title: 'About CSS Frankfurt',
    content:
      'CSS Frankfurt is a meetup community for anyone interested in CSS and design on the web. Our events conists of talks and workshops dedicated to CSS, as well as social coding nights where we get together and have fun with CSS. CSS Frankfurt welcomes people of all skill levels and we are also there for anyone who is just getting started with CSS. We hope to see you at our events! If you have any questions, please reach out to us, we will be happy to help!'
  })
}
</script>
<style lang="sass">

  @import "src/assets/styles/style-variables.sass"

  .content-container
    margin-bottom: 10px

  .profile
    display: flex
    flex: 1 1 auto
    margin-top: 10px
    margin-bottom: 20px
    @include mobile
      flex-direction: column
      margin-bottom: 10px
      text-align: center

  .pic
    max-height: 180px
    max-width: 180px
    border-radius: 50%
    overflow: hidden
    margin-right: 30px
    margin-bottom: 15px
    flex-shrink: 0
    @include mobile
      margin: 0 auto
      margin-bottom: 15px

  .info
    flex: 1 1 auto

  .profile-name, .venue-name
    font-size: 1.3rem
    color: $pink

  .work, .address
    font-size: 1rem
    font-weight: bold

  .profile-description
    margin-top: 5px
    margin-bottom: 10px

  .social
    margin-top: 5px

</style>

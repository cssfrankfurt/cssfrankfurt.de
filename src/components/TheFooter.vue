<template>
    <footer class="footer">
      Come find us!
      <a :href="meetup">
        <font-awesome-icon
        :icon="['fab', 'meetup']"
        class="social-icon"
        role="img"
        aria-hidden="true"
      />
      </a>
      <a :href="twitter">
        <font-awesome-icon
        :icon="['fab', 'twitter']"
        class="social-icon"
        role="img"
        aria-hidden="true"
      />
      </a>
      <a :href="github">
        <font-awesome-icon
        :icon="['fab', 'github']"
        class="social-icon"
        role="img"
        aria-hidden="true"
      />
      </a>
      <a :href="medium">
        <font-awesome-icon
        :icon="['fab', 'medium']"
        class="social-icon"
        role="img"
        aria-hidden="true"
      />
      </a>
      <a :href="codepen">
        <font-awesome-icon
        :icon="['fab', 'codepen']"
        class="social-icon"
        role="img"
        aria-hidden="true"
      />
      </a>
    </footer>
</template>
<script>
import SocialmediaList from '@/components/profiles/SocialmediaList'

export default {
  name: 'Footer',
  components: {
    SocialmediaList
  },
  data: () => ({
    twitter: 'https://twitter.com/cssfrankfurt',
    github: 'https://github.com/cssfrankfurt',
    codepen: 'https://codepen.io/cssfrankfurt',
    medium: 'https://medium.com/cssfrankfurt',
    meetup: 'https://meetup.com/cssfrankfurt'
  })
}
</script>

<style lang="sass" scoped>

  @import "src/assets/styles/style-variables.sass"


  .footer
    position: sticky
    bottom: 0
    width: 100%
    color: white
    font-family: $font-secondary
    display: flex
    align-items: center
    justify-content: flex-end
    min-height: 3rem
    text-align: right
    background: $black
    padding: 0 2rem
    margin-top: 1rem
  
  .social-icon
    font-size: 1.2rem
    color: white
    margin-left: 1rem

</style>

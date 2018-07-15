<template>
    <footer class="footer">
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
import SocialmediaList from '@/4_components/profiles/SocialmediaList'

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

  .footer
    position: fixed
    right: 0
    bottom: 0
    left: 0
    min-height: 1.5rem
    width: 100%
    color: white
    font-family: $font-secondary
    text-align: center
    background: $black
    padding: .5rem 2rem

  .social-icon
    font-size: 1.1rem
    color: white
    margin-left: .5rem
    transition: transform .1s linear
    &:hover
      transform: scale(1.2)

</style>

<template>
    <article class="profile">
      <img
        class="profile-img"
        :src="profile.img"
        :alt="profile.name"
      />
      <div class="info">
        <h2 class="profile-name">{{profile.name}}</h2>
        <h3 class="work">{{profile.title}}, {{profile.company}}</h3>
        <blockquote class="profile-description">
          <font-awesome-icon
            :icon="['fas', 'quote-left']"
            class="quote-icon"
            role="img"
            aria-hidden="true"
            />
          {{profile.quote}}
          </blockquote>
        <socialmedia-list :social="profile.socialmedia"/>
      </div>
    </article>
</template>

<script>
import SocialmediaList from '@/4_components/profiles/SocialmediaList'
export default {
  name: 'ProfileInfo',
  components: {
    SocialmediaList
  },
  props: {
    profile: {
      type: Object,
      required: true,
      default: function() {
        return {profile: 'no profile'}
      }
    }
  }
}
</script>

<style lang="sass" scoped>

  @import "src/0_assets/styles/style-variables.sass"

  .profile
    display: flex
    flex-direction: row
    flex: 1 1 auto
    align-items: center
    justify-content: center
    margin: 1rem 0

  .profile-img
    max-height: 7rem
    max-width: 7rem
    border-radius: 50%
    overflow: hidden
    margin-right: 1rem
    flex-shrink: 0

  .info
    flex: 1 1 auto

  .work
    font-size: 1rem
    font-weight: normal

  .quote-icon
    font-size: .8rem
    color: $pink

  .profile-description
    font-size: 1.2rem
    margin-bottom: .5rem
    @include mobile
      max-width: 400px
      margin: 0 auto

  .description
    margin: .5rem 0
  
  .social-media-list
    margin-top: .5rem

</style>

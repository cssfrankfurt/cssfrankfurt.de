<template>
    <article>
      <img
        class="profile-img"
        :src="profile.img"
        :alt="'Picture of ' + profile.name"
      />
      <div class="info">
        <h2 class="profile-name">{{profile.name}}</h2>
        <h3 class="work">{{profile.title}}, {{profile.company}}</h3>
        <div class="profile-description">"{{profile.quote}}"</div>
        <socialmedia-list :social="profile.socialmedia"/>
      </div>
    </article>
</template>

<script>
import SocialmediaList from '@/components/profiles/SocialmediaList'
export default {
  name: 'ProfileComp',
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

  @import "src/assets/styles/style-variables.sass"

  .profile
    display: flex
    flex-direction: row
    flex: 1 1 auto
    align-items: center
    justify-content: center
    padding: 1rem 0
    @include mobile
      flex-direction: column
      text-align: center

  .profile-img
    max-height: 7rem
    max-width: 7rem
    border-radius: 50%
    overflow: hidden
    margin-right: 1rem
    flex-shrink: 0
    @include mobile
      max-width: 8rem
      max-height: 8rem
      margin: 1rem auto

  .info
    flex: 1 1 auto

  .profile-name, .venue-name
    font-size: 1.2rem
    color: $black

  .work
    font-size: .9rem
    font-weight: 600
    color: $pink

  .profile-description
    font-size: 1rem
    margin-bottom: .5rem
    @include mobile
      max-width: 400px
      margin: 0 auto

  .description
    margin: .5rem 0

</style>

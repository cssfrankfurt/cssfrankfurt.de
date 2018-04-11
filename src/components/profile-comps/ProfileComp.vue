<template>
  <section class="content-container">
    <!-- <h1 class="title">{{title}}</h1>
    <article class="description">{{content}}</article> -->
    <div
      class="profile"
      v-for="profile in profiles"
      :key="profile.name">
      <img
        class="profile-img"
        :src="profile.img"
        :alt="'Picture of ' + profile.name"
      />
      <div class="info">
        <h2 class="profile-name">{{profile.name}}</h2>
        <h3 class="work">{{profile.title}}, {{profile.company}}</h3>
        <article class="profile-description">"{{profile.quote}}"</article>
        <socialmedia-list :social="profile.socialmedia"/>
      </div>
    </div>
    <!-- <article v-if="adventure" class="profile-description">{{adventure.content}}
      <div class="tags">{{adventure.tags}}</div>
    </article> -->
  </section>
</template>

<script>
import SocialmediaList from '@/components/profile-comps/SocialmediaList'
export default {
  name: 'ProfileComp',
  components: {
    SocialmediaList
  },
  props: {
    title: {
      type: String,
      required: false
    },
    content: {
      type: String,
      required: false
    },
    adventure: {
      type: Object,
      required: false
    },
    tags: {
      type: String,
      required: false
    },
    profiles: {
      type: Array,
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

  .content-container
    margin: 1.5rem auto
    max-width: 550px
    @include mobile
      width: 100%

  .profile
    display: flex
    flex-direction: row
    flex: 1 1 auto
    align-items: center
    justify-content: center
    padding: 1rem 0
    border-bottom: 1px solid $lightgrey
    @include mobile
      flex-direction: column
      text-align: center

  .profile-img
    max-height: 7rem
    max-width: 7rem
    border-radius: 50%
    overflow: hidden
    margin-right: 1rem
    // margin-bottom: 1rem
    flex-shrink: 0
    @include mobile
      max-width: 8rem
      max-height: 8rem
      margin: 1rem auto

  .info
    flex: 1 1 auto

  .profile-name, .venue-name
    font-size: 1.2rem
    color: $pink

  .work
    font-size: .9rem
    font-weight: 600

  .profile-description
    font-size: 1rem
    margin-bottom: .5rem
    @include mobile
      max-width: 400px
      margin: 0 auto

  .description
    margin: .5rem 0

  // Reverse profile

  .reverse
    flex-direction: row-reverse
    text-align: right
    margin-bottom: 0
    @include mobile
      flex-direction: column
      text-align: center

    .profile-img
      margin: 0
      margin-top: -0.8rem
      margin-bottom: 1rem
      margin-left: 3rem
      @include mobile
        margin: 0 auto
        margin-bottom: 1rem

    .socialmedia
      margin-bottom: .5rem

    .social-icon
      margin-right: 0
      margin-left: 1rem

  .tags
    font-size: 1.2rem
    text-align: center
    margin: 1rem 0
    color: $pink
    letter-spacing: 1px
    font-weight: 400

</style>

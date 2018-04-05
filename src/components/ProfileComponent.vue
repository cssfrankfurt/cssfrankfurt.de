<template>
  <section class="content-container">
    <h1 class="title">{{title}}</h1>
    <article class="description">{{content}}</article>
    <div class="profile" :class="{reverse: title === 'Frank'}" v-for="profile in profiles" :key="profile.name">
      <img class="profile-img" :src="profile.img" :alt="'Picture of ' + profile.name">
      <div class="info">
        <h2 class="profile-name">{{profile.name}}</h2>
        <h3 class="work">{{profile.title}}, {{profile.company}}</h3>
        <article class="profile-description">"{{profile.quote}}"</article>
        <div class="socialmedia">
          <a :href="profile.twitter" v-if="profile.twitter" title="Twitter link">
            <font-awesome-icon :icon="['fab', 'twitter']" class="social-icon" role="img" aria-hidden="true"/>
          </a>
          <a :href="profile.github" v-if="profile.github" title="Github link">
           <font-awesome-icon :icon="['fab', 'github']" class="social-icon" role="img" aria-hidden="true"/>
          </a>
          <a :href="profile.codepen" v-if="profile.codepen" title="Codepen link">
            <font-awesome-icon :icon="['fab', 'codepen']" class="social-icon" role="img" aria-hidden="true"/>
          </a>
          <a :href="profile.linkedin" v-if="profile.linkedin" title="Linkedin link">
            <font-awesome-icon :icon="['fab', 'linkedin-in']" class="social-icon" role="img" aria-hidden="true"/>
          </a>
          <a :href="profile.xing" v-if="profile.xing" title="xing link">
            <font-awesome-icon :icon="['fab', 'xing']" class="social-icon" role="img" aria-hidden="true"/>
          </a>
          <a :href="profile.youtube" v-if="profile.youtube" title="Youtube link">
            <font-awesome-icon :icon="['fab', 'youtube']" class="social-icon" role="img" aria-hidden="true"/>
          </a>
          <a :href="profile.external" v-if="profile.external" title="Portfolio website link">
            <font-awesome-icon :icon="['far', 'window-maximize']" class="social-icon" role="img" aria-hidden="true"/>
          </a>
        </div>
      </div>
    </div>
    <article v-if="adventure" class="profile-description">
      {{adventure.content}}
      <div class="tags">{{adventure.tags}}</div>
    </article>
  </section>
</template>
<script>
export default {
  name: 'ProfileComponent',
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
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
    margin: 1.5rem 0

  .profile
    display: flex
    flex: 1 1 auto
    margin: 1rem 0
    align-items: center
    @include mobile
      flex-direction: column
      text-align: center

  .profile-img
    max-height: 11rem
    max-width: 11rem
    border-radius: 50%
    overflow: hidden
    margin-right: 3rem
    margin-bottom: 1rem
    flex-shrink: 0
    @include mobile
      max-width: 8rem
      max-height: 8rem
      margin: 1rem auto

  .info
    flex: 1 1 auto

  .profile-name, .venue-name
    font-size: 1.3rem
    color: $pink

  .work, .address
    font-size: 1rem
    font-weight: bold

  .profile-description
    font-size: 1rem
    margin-bottom: 1rem
    @include mobile
      max-width: 400px
      margin: 0 auto

  .socialmedia
    margin-top: 1rem
    @include mobile
      text-align: center
  
  .social-icon
    font-size: 1.3rem
    color: $pink
    margin-right: 1rem
    @include mobile
      margin: 0 .5rem

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

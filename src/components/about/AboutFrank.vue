<template>
  <section class="content-container frank">
    <h1 class="section-title"><span role="img" aria-hidden="true">#</span>{{title}}</h1>
    <article class="description">{{about}}</article>

    <div class="profile description">
      <img class="pic" :src="pic" :alt="'Picture of ' + name">
      <div class="info">
        <h2 class="profile-name">{{name}}</h2>
        <h3 class="work">{{work}}</h3>
        <article class="profile-description">"{{quote}}"</article>
        <div class="socialmedia">
          <a :href="twitter" v-if="twitter" title="Twitter link"><twitter-icon class="social-icon" role="img" aria-hidden="true"/></a>
          <a :href="instagram" v-if="instagram" title="Instagram link"><instagram-icon class="social-icon" role="img" aria-hidden="true"/></a>
          <a :href="github" v-if="github" title="Github link"><github-icon class="social-icon" role="img" aria-hidden="true"/></a>
        </div>
      </div>
    </div>
    <article class="description">
      {{adventure}}
      <div class="tags">#adventurefrank #cssfrankfurt</div>
    </article>
  </section>
</template>
<script>
import {TwitterIcon, InstagramIcon, GithubIcon} from 'vue-feather-icons'
export default {
  name: 'AboutFrank',
  components: {
    TwitterIcon,
    InstagramIcon,
    GithubIcon
  },
  data: () => ({
    name: 'Frank Furt',
    title: 'frank',
    work: 'Offical Mascat, CSS Frankfurt',
    about:
      "In case you're wondering what CSS has in common with a cat, you simply have to examine the relationship you often have with CSS, and compare it to the human/cat relationship. It's all about love and hate, and that's where Frank comes in!",
    quote:
      'I am Curious. I am Adventurous. I am Talented. So I guess that makes me a C.A.T',
    adventure:
      'Frank is currently working on a small project. Frank wants to take over the world and needs your help! Frank has been very kind and ordered us all some stickers that needs to be spread all around the world! Come along to one of our events to pick up some stickers that you can put up around wherever you go and use these tags:',
    pic: require('@/assets/frank.svg'),
    twitter: 'https://twitter.com/cssfrankfurt',
    instagram: 'https://instagram.com/cssfrankfurt',
    github: 'https://github.com/cssfrankfurt'
  })
}
</script>
<style lang="sass" scoped>
  @import "src/assets/styles/style-variables.sass"

  .profile
    flex-direction: row-reverse
    text-align: right
    @include mobile
      flex-direction: column
      text-align: center

  .pic
    margin: 0
    margin-top: -10px
    margin-bottom: 10px
    margin-left: 40px
    @include mobile
      margin: 0 auto
      margin-bottom: 15px

  .tags
    font-size: 18px
    text-align: center
    margin: 10px 0
    color: $pink
    letter-spacing: 1px
    font-weight: 400
</style>

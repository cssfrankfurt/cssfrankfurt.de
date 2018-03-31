<template>
  <section class="content-container organisers">
    <h1 class="section-title"><span role="img" aria-hidden="true">#</span>{{title}}</h1>
    <article class="description">{{content}}</article>
    <div class="profile" v-for="profile in profiles" :key="profile.name">
      <img class="pic" :src="profile.pic" :alt="'Picture of ' + profile.name">
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
  </section>
</template>
<script>
export default {
  name: 'AboutOrganisers',
  data: () => ({
    title: 'organisers',
    content:
      'CSS Frankfurt is currently organised by three friends loyal to Frank. As a thank you, Frank gifted each of them a hoodie with their personal Frank clone printed on the back. If you would like to help organise CSS Frankfurt, there is always help needed, so please reach out to us!',
    twitter: 'https://twitter.com/cssfrankfurt',
    instagram: 'https://instagram.com/cssfrankfurt',
    profiles: [
      {
        name: 'Melana Grönert',
        title: 'Front-End Developer',
        company: 'DB Systel',
        pic: require('@/assets/melana.gif'),
        quote:
          'Be bold or italic, but never be regular. Talk to me about hackathons, scrum, motorcycles and BI software mashups!',
        twitter: 'https://twitter.com/katradical',
        github: 'https://github.com/kat-radical',
        xing: 'https://www.xing.com/profile/Melana_Groenert'
      },
      {
        name: 'Victoria Bergquist',
        title: 'Front-End Developer',
        company: 'melsicon',
        pic: require('@/assets/victoria.gif'),
        quote:
          'Twitter is my safespace. I like to make silly things with CSS! Mother of Cats.',
        twitter: 'https://twitter.com/vicbergquist',
        codepen: 'https://codepen.io/vicbergquist/',
        github: 'https://github.com/vicbergquist',
        linkedin: 'https://www.linkedin.com/in/victoriabergquist/',
        youtube: 'https://www.youtube.com/victoriabergquist',
        external: 'https://mountainstick.com'
      },
      {
        name: 'Steffen Henschel',
        title: 'Front-End Developer',
        company: 'INNOQ',
        pic: require('@/assets/steffen.gif'),
        quote: 'To include a quote, or not to include a quote. That is the question.',
        twitter: 'https://twitter.com/blynxical',
        github: 'https://github.com/blynx',
        xing: 'https://www.xing.com/profile/Steffen_Henschel5',
        external: 'http://www.steffenhenschel.com'
      }
    ]
  })
}
</script>
<style lang="sass" scoped>

  @import "src/assets/styles/style-variables.sass"

  .organisers
    display: flex
    flex-direction: column
    justify-content: space-around
    flex-wrap: wrap
    margin-top: 15px
  
  .profile
    margin-left: 30px

  .profile
    margin-left: 30px

  .profile:first-of-type
    margin-top: 40px
    @include mobile
      margin-top: 15px

  .description
    margin-bottom: 5px

  .socialmedia
    margin: 15px 0
  @include mobile
    text-align: center
</style>

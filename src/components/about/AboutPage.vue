<template>
  <main class="container">
    <h1 class="section-title"><span role="img" aria-hidden="true">#</span>{{title}}</h1>
    <article class="description">{{content}}</article>
    <ProfileComponent 
      :title="frank.title" 
      :adventure="frank.adventure"
      :content="frank.content" 
      :profiles="frank.profiles"
    />
    <ProfileComponent 
      :title="organisers.title" 
      :content="organisers.content" 
      :profiles="organisers.profiles"
    />
  </main>
</template>
<script>
import ProfileComponent from '@/components/about/ProfileComponent'
import about from '@/assets/about'

export default {
  name: 'AboutPage',
  components: {
    ProfileComponent
  },
  data: () => ({
    title: 'About',
    content:
      'CSS Frankfurt is a meetup community for anyone interested in CSS and design on the web. Our events conists of talks and workshops dedicated to CSS, as well as social coding nights where we get together and have fun with CSS. CSS Frankfurt welcomes people of all skill levels and we are also there for anyone who is just getting started with CSS. We hope to see you at our events! If you have any questions, please reach out to us, we will be happy to help!',
    frank: {
      title: about.frank.title,
      content: about.frank.content,
      adventure: about.frank.adventure,
      profiles: about.frank.profiles
    },
    organisers: {
      title: about.organisers.title,
      content: about.organisers.content,
      profiles: about.organisers.profiles
    }
  })
}
</script>

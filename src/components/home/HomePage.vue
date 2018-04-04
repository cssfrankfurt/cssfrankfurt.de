<template>
  <main class="container">
    <h1 class="section-title"><span role="img" aria-hidden="true">#</span>{{title}}</h1>
    <article class="description">{{welcome}}</article>
    <NewsFeed/>
</main>
</template>
<script>
import NewsFeed from '@/components/home/NewsFeed'
export default {
  name: 'HomePage',
  components: {
    NewsFeed
  },
  data: () => ({
    title: 'Welcome',
    welcome:
      'Welcome to CSS Frankfurt! We are a community in the Rhein-Main area dedicated to CSS. Everyone with an interest in CSS and web design, beginner and professional alike, is welcome to our events. We hope to see you around!'
  })
}
</script>

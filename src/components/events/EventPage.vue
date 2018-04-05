<template>
  <main class="container">
    <h1 class="section-title"><span role="img" aria-hidden="true">#</span>{{title}}</h1>
    <article class="description">{{about}}</article>
    <ItemList :items="events"/>
  </main>
</template>
<script>
import ItemList from '@/components/list/ItemList'
import {mapGetters} from 'vuex'
export default {
  name: 'EventPage',
  components: {
    ItemList
  },
  data: () => ({
    title: 'Events',
    about:
      'CSS Frankfurt organises talks, workshops and social coding nights all dedicated to CSS. At our events you can also find Frank stickers, that you can keep for yourself or spread them around the world to help Frank towards world domination (#adventurefrank #cssfrankfurt)! If you have any questions about our events or have any suggestions for us, please get in touch with us. We hope to see you around!'
  }),
  computed: {
    ...mapGetters({
      events: 'events/events'
    })
  }
}
</script>

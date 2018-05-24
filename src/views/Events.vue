<template>
    <main class="container">
      <page-comp :title="title" :description="description"/>
      <item-list :items="events"/>
    </main>
</template>
<script>
import PageComp from '@/components/PageComp'
import ItemList from '@/components/list/ItemList'
export default {
  name: 'EventPage',
  components: {
    ItemList,
    PageComp
  },
  props: {
    title: {
      value: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    events: {
      type: Array,
      required: true,
      default: function() {
        return {profile: 'Items unavailable'}
      }
    }
  }
}
</script>

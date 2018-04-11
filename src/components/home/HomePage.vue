<template>
    <main class="container">
      <page-comp :title="title" :description="description"/>
      <!-- Add next event here -->
      <div class="home-content">
        <h3>Next event</h3>
        <item-list :items="tweets"/>
      </div>
    </main>
</template>
<script>
import PageComp from '@/components/PageComp'
import ItemList from '@/components/item-list/ItemList'
export default {
  name: 'HomePage',
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
    tweets: {
      type: Array,
      required: true,
      default: function() {
        return {profile: 'Items unavailable'}
      }
    }
  }
}
</script>
<style lang="sass" scoped>

</style>


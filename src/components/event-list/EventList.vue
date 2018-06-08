<template>
  <ul class="item-list">
    <event-item
      v-for="item in items"
      :item="item"
      :key="item.index"
    />
  </ul>
</template>
<script>
import EventItem from '@/components/event-list/EventItem'
export default {
  name: 'ItemList',
  components: {
    EventItem
  },
  props: {
    items: {
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

  .item-list
    margin-top: 1rem

</style>

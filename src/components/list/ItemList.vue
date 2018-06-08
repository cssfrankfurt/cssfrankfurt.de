<template>
  <ul class="item-list">
    <list-item
      v-for="item in items"
      :item="item"
      :key="item.index"
    />
  </ul>
</template>
<script>
import ListItem from '@/components/list/ListItem'
export default {
  name: 'ItemList',
  components: {
    ListItem
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

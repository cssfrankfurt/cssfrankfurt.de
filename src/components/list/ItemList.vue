<template>
  <ul class="item-list">
    <ListItem
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
      required: false,
      default: function() {
        return {profile: 'Items unavailable'}
      }
    }
  }
}
</script>

<style lang="sass" scoped>

  @import "src/assets/styles/style-variables.sass"

</style>

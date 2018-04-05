<template>
  <ul class="item-list">
    <slot name="filter"></slot>
    <ListItemComponent
      v-for="item in items"
      :item="item"
      :key="item.index"
    />
  </ul>
</template>
<script>
import ListItemComponent from '@/components/list-components/ListItemComponent'
export default {
  name: 'ListComponent',
  components: {
    ListItemComponent
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

  .item-list
    margin-top: 2rem

</style>

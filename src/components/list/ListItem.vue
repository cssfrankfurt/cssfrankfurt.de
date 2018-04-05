<template>
  <li class="list-item">
      <h2 class="item-title" title="item.title">{{item.title}}</h2>
      <ul class="item-info">
        <InfoItem/>
      </ul>
      <article class="description" >
        {{item.description | truncate(200)}}
      </article>
    </li>
</template>
<script>
import InfoItem from '@/components/list/InfoItem'
export default {
  components: {
    InfoItem
  },
  props: {
    item: {
      type: Object,
      required: true,
      default: function() {
        return {profile: 'Info unavailable'}
      }
    }
  },
  filters: {
    truncate(value, length) {
      return value.substring(0, length) + '...'
    }
  }
}
</script>
<style lang="sass" scoped>

</style>

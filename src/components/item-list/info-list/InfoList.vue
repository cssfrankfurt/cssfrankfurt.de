<template>
  <ul class="info-list">
    <info-item
      v-for="(info, key) in infos"
      :info="info"
      :type="key"
      :key="info.index"
    />
  </ul>
</template>
<script>
import InfoItem from '@/components/item-list/info-list/InfoItem'
export default {
  components: {
    InfoItem
  },
  props: {
    infos: {
      type: Object,
      required: true,
      default: function() {
        return {profile: 'Unavailable'}
      }
    }
  },
  computed: {
  }
}
</script>
<style lang="sass" scoped>

  @import "src/assets/styles/style-variables.sass"

  .info-list
    display: flex

</style>

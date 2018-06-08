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
import InfoItem from '@/4_components/event-list/event-info/InfoItem'
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

  @import "src/0_assets/styles/style-variables.sass"

  .info-list
    display: flex
    flex-wrap: wrap

</style>

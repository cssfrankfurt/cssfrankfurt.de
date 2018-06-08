
<template>
  <li class="info-item">
    <font-awesome-icon
      :icon="[style, icon]"
      class="info-icon"
      role="img"
      aria-hidden="true"
    />
    {{info}}
  </li>
</template>
<script>
export default {
  props: {
    info: {
      type: [String, Number],
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  computed: {
    icon() {
      if (this.type === 'date') return 'calendar-alt'
      if (this.type === 'location') return 'map-marker-alt'
      if (this.type === 'attending') return 'users'
      if (this.type === 'retweets') return 'retweet'
      if (this.type === 'favorites') return 'heart'
    },
    style() {
      if (this.type === 'date') return 'far'
      else return 'fas'
    }
  },
  mounted() {
    // console.log(this.type)
  }
}
</script>
<style lang="sass">

  @import "src/assets/styles/style-variables.sass"

  .info-item
    margin-right: 1rem
    font-size: .9rem
    font-family: $font-body

</style>

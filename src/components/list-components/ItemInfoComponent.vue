
<template>
  <li class="info-item">
    <slot name="icon"></slot>
    {{info}}
  </li>
</template>
<script>
export default {
  props: {
    info: {
      type: [String, Number],
      required: true
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

  @import "src/assets/styles/style-variables.sass"

  .info-item
    margin-right: 1rem

  .info-icon
    color: $pink
    stroke-width: 1.8
    height: 18px
    vertical-align: center

</style>

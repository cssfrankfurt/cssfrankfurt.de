
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

  .info-item
    margin-right: 1rem
    font-size: 1rem
    font-family: $font-body
    @include mobile
      &:nth-child(1)
        order: 1
      &:nth-child(2)
        order: 3
      &:nth-child(3)
        order: 2

</style>

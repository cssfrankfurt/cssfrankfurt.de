<template>
    <div class="page-description">
      <h1 class="section-title">{{title}}</h1>
      <article class="description">{{description}}</article>
    </div>
</template>
<script>
export default {
  name: 'PageComp',
  props: {
    title: {
      value: String,
      required: true
    },
    description: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="sass" scoped>

  @import "src/assets/styles/style-variables.sass"

  .section-title
    font-family: $font-secondary
    font-weight: 900
    font-size: 1.5rem

    span
      color: $pink
      margin-right: .5rem

</style>

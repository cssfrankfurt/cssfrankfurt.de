<template>
    <div class="page-description">
        <h1 class="section-title">{{title}}</h1>
        <article class="description" v-html="description"/>
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

  .page-description
    margin-bottom: 1rem

</style>

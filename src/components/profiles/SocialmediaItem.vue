
<template>
  <li class="social-media-item">
    <a :href="url" :title="title + ' link'">
      <slot name="icon"/>
    </a>
  </li>
</template>

<script>
export default {
  name: 'SocialmediaList',
  props: {
    url: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>

  @import "src/assets/styles/style-variables.sass"

  .social-media-item
    display: inline-block

  .social-icon
    font-size: 1.3rem
    color: $pink
    margin-right: 1rem
    transition: transform .1s linear
    @include mobile
      margin: 0 .5rem
    &:hover
      transform: scale(1.2)

</style>

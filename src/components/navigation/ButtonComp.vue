<template>
  <button class="cta" @click="submit" v-if="!wXS" role="button" aria-label="submit a talk">
    <div class="cta-inner">{{title}}</div>
  </button>
</template>
<script>
export default {
  name: 'ButtonComponent',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    submit() {

      // this.$router.push('/contact')
      // this.$store.dispatch('getFormType', 'submit')
    }
  }
}
</script>
<style lang="sass" scoped>

  @import "src/assets/styles/style-variables.sass"

  /* CTA BUTTON STYLING */

  .cta
    cursor: pointer
    border-radius: 2rem
    border: 2px solid white
    margin-left: 1rem

  .cta-inner
    color: white
    font-weight: bold
    background: $pink
    height: 100%
    width: 100%
    padding: .6rem 1rem
    border-radius: 2rem

    box-shadow: inset 0px -3px $dark-pink

  .cta:focus
    outline: 0

  .cta:hover .cta-inner
    transform: translate(1px,2px)
    box-shadow: inset 0px -3px transparent

  .cta.router-link-exact-active:hover .cta-inner
    transform: translate(0)
    box-shadow: inset 0px -3px transparent

  .cta.router-link-exact-active
    max-height: 55px
    border: 2px solid $pink

    .cta-inner
      color: $pink
      background: white
      box-shadow: inset 0px -3px transparent
</style>

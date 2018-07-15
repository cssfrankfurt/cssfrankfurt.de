<template>
    <button v-if="!wXS" class="cta" role="button" aria-label="submit a talk" @click="submit">
        <div class="cta-inner">{{title}}</div>
        <span v-if="error" class="error">Coming soon!</span>
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
  data: () => ({
    error: false
  }),
  watch: {
    error() {
      setTimeout(() => {
        this.error = false
      }, 3000)
    }
  },
  methods: {
    submit() {
      this.error = true
      // this.$router.push('/contact')
      // this.$store.dispatch('getFormType', 'submit')
    }
  }
}
</script>
<style lang="sass" scoped>

  /* CTA BUTTON STYLING */

  .cta
    position: relative
    cursor: pointer
    border-radius: 2rem
    border: 2px solid white
    margin-left: .5rem

  .error
    position: absolute
    left: 0
    width: 100%
    margin-top: .2rem
    font-size: .8rem
    animation-name: error
    animation-duration: .2s
    animation-iteration-count: 1

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

  /* Error animation */

  @keyframes error
    0%, 100%
      transform: translateX(10px)
    50%
      transform: translateX(-5px)
</style>

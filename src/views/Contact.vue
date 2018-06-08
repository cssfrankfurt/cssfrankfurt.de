<template>
  <main class="container">
    <page-comp :title="title" :description="description"/>
     <socialmedia-list :social="socialmedia"/>
     <h2 class="item-title">Contact form</h2>
    <contact-form/>
</main>
</template>
<script>
import ContactForm from '@/components/contact/ContactForm'
import SubmitForm from '@/components/contact/SubmitForm'
import PageComp from '@/components/PageComp'
import SocialmediaList from '@/components/profiles/SocialmediaList'
export default {
  name: 'ContactPage',
  components: {
    ContactForm,
    SubmitForm,
    PageComp,
    SocialmediaList
  },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  data: () => ({
    socialmedia: {
      twitter: 'https://twitter.com/cssfrankfurt',
      github: 'https://github.com/cssfrankfurt',
      medium: 'https://medium.com/cssfrankfurt',
      codepen: 'https://codepen.io/cssfrankfurt'
    }
  })
}
</script>

<style lang="sass" scoped>

  .social-media-list
    text-align: center
    margin: 1rem 0

</style>


<style lang="sass">

  @import "src/assets/styles/style-variables.sass"

  .feedback
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    max-width: 400px
    margin: 3rem auto
    text-align: center

  .clear-submit
    align-self: flex-end

    .form-button
      color: $black
      font-family: $font-secondary
      font-size: 1rem
      font-weight: 300
      border: 0
      outline: 0
      background: 0
      display: inline-block
      &.submit
        color: $pink
        font-weight: bold
        &:hover
          border-bottom: 2px solid $pink
      &.clear
        margin-right: 1rem
        font-weight: 300
        color: $black

</style>

<template>
  <main class="container">
    <h1 class="section-title"><span role="img" aria-hidden="true">#</span>{{title}}</h1>
    <article class="description">{{about}}</article>
    <div class="filter">
      <input id="contact" type="radio" v-model="form" value="contact"/>
      <label for="contact"><span>{{contact}}</span></label>
      <input id="submit" type="radio" v-model="form" value="submit"/>
      <label for="submit"><span>{{submit}}</span></label>
    </div>
    <transition name="fade" mode="out-in">
    <ContactForm v-if="this.form === 'contact'"/>
    <SubmitForm v-if="this.form === 'submit'"/>
  </transition>
</main>
</template>
<script>
import ContactForm from '@/components/contact/ContactForm'
import SubmitForm from '@/components/contact/SubmitForm'
export default {
  name: 'ContactPage',
  components: {
    ContactForm,
    SubmitForm

  },
  data: () => ({
    title: 'Contact',
    about:
      "Would you like to help out with CSS Frankfurt, become a sponsor, submit a talk proposal, ask a question or just say hi? You've come to the right place. Fill out our contact form and we will get back to you as soon as possible!",
    contact: 'Say hi!',
    submit: 'Submit a talk'
  }),
  computed: {
    form: {
      // Set the form type, contact form or submit form
      get() {
        return this.$store.state.form
      },
      set(newType) {
        this.$store.dispatch('getFormType', newType)
      }
    }
  }
}
</script>

<style lang="sass">

  @import "src/assets/styles/style-variables.sass"

  form.contact-submit
    display: flex
    flex-direction: column
    max-width: 400px
    margin: 0 auto
    margin-bottom: 60px

    .field-label
      font-weight: 300
      margin-bottom: 1rem

    input.form-field, textarea.form-field
      min-height: 2rem
      font-size: 1rem
      font-family: $font
      font-weight: 300
      outline: 0
      border: 1px solid $lightgrey
      border-radius: 3px
      padding: .5rem 1rem
      margin-bottom: 1rem
      &:focus
        border: 1px solid $pink

    textarea.form-field
      min-height: 150px
      max-width: 400px

  .required::after
    color: $pink
    font-size: 0.7rem
    content: '*'
    position: absolute
    display: inline-block

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
      font-family: $font
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

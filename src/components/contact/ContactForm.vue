<template>
  <form class="contact-form" action="" v-if="!sent" @submit.prevent="submitForm" method="post">
    <div class="feedback" v-if="sent || error">
        <p v-if="sent">Thank you, Frank is now processing your message.<br> Expect to hear back from us soon!</p>
        <p v-if="error">Oops, something went wrong... Please try again!</p>
        <loader-comp class="contact-frank"/>
      </div>
    <div class="input-group" v-if="!sent">
      <label class="field-label required" for="name">Full name</label>
    <input
      class="form-field"
      type="text"
      name="name"
      id="name"
      v-model="name"
      v-validate="'required'"
      required>
    <span class="error-message" v-show="errors.has('name')">
      <font-awesome-icon
        :icon="['fas', 'info-circle']"
        class="info-icon"
        role="img"
        aria-hidden="true"
      />{{errors.first('name')}}
      </span>
    </div>

    <div class="input-group" v-if="!sent">
      <label class="field-label required" for="email">Your email</label>
    <input
      v-model="email"
      id="email"
      class="form-field"
      v-validate="'required|email'"
      type="email"
      name="email"
      required>
    <span class="error-message" v-show="errors.has('email')">
      <font-awesome-icon
        :icon="['fas', 'info-circle']"
        class="info-icon"
        role="img"
        aria-hidden="true"
      />{{ errors.first('email') }}</span>
    </div>

    <div class="input-group" v-if="!sent">
      <label class="field-label required" for="message">Message</label>
      <textarea
        class="form-field"
        type="text"
        name="message"
        id="message"
        v-model="message"
        v-validate="'required|email'"
        required/>

    <div class="clear-submit" v-if="!sent">
        <input class="form-button clear" type="reset" value="Clear form" v-if="!loading"/>
        <input class="form-button submit" type="submit" value="Send message" v-if="!loading" />
        <span v-if="loading">Sending message...</span>
      </div>

    </div>
  </form>
</template>
<script>
import LoaderComp from '@/components/LoaderComp'
import axios from 'axios'
export default {
  name: 'ContactForm',
  components: {
    LoaderComp
  },
  data: () => ({
    name: '',
    email: '',
    message: '',
    sent: false,
    error: false,
    loading: false
  }),
  watch: {
    sent() {
      // Show form again after 6s
      setTimeout(() => {
        this.sent = false
        this.name = ''
        this.email = ''
        this.message = ''
      }, 6000)
    },
    error() {
      // Show form again after 6s
      setTimeout(() => {
        this.error = false
        this.sent = false
      }, 6000)
    }
  },
  methods: {
    submitForm() {
      this.loading = true
      axios.post('https://vpw55mka5b.execute-api.us-east-1.amazonaws.com/contact', {
        name: this.name,
        email: this.email,
        message: this.message
      })
        .then((response) => {
          this.sent = true
          this.loading = false
        })
        .catch((error) => {
          this.error = true
          this.sent = false
          console.log(error)
        })
    }
  }
}

</script>

<style lang="sass" scoped>

  @import "src/assets/styles/style-variables.sass"

  .input-group
    margin: 0 auto
    max-width: 400px
    margin-bottom: .5rem

  .error-message
    display: flex
    align-items: center
    justify-content: flex-end
    font-size: .8rem
    margin: .2rem 0
    display: block
    text-align: right

  .field-label
    display: block
    font-weight: 300
    margin-bottom: .2rem

  input.form-field, textarea.form-field
    width: 100%
    min-height: 2rem
    font-size: 1rem
    font-family: $font-body
    font-weight: 300
    outline: 0
    border: 1px solid $lightgrey
    border-radius: 3px
    padding: .5rem .5rem
    &:focus
      border: 1px solid $pink

  textarea.form-field
    min-height: 150px

  .required::after
    color: $pink
    font-size: 0.7rem
    content: '*'
    position: absolute
    display: inline-block

  .clear-submit
    text-align: right

  .feedback
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    max-width: 400px
    margin: 3rem auto
    text-align: center

  .form-button
    color: $black
    font-family: $font-body
    font-size: 1rem
    font-weight: 300
    border: 0
    outline: 0
    background: 0
    display: inline-block
    &.submit
      color: $pink
      font-weight: bold
      cursor: pointer
    &.clear
      margin-right: 1rem
      font-weight: 300
      color: $black
</style>

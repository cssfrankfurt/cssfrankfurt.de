<template>
  <form class="contact-form" action="">
    <div class="input-group">
      <label class="field-label required" for="name">Name</label>
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

    <div class="input-group">
      <label class="field-label required" for="email">Email</label>
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


    <div class="input-group">
      <label class="field-label required" for="message">Message</label>
      <textarea 
        class="form-field" 
        type="text" 
        name="message" 
        id="message"
        v-model="message"
        v-validate="'required|email'"
        required/>
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

</style>

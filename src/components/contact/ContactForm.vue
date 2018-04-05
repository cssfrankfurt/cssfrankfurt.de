<template>
  <section class="content-container contact">
    <transition name="fade" mode="out-in">
      <div class="feedback" v-if="sent || error">
        <p v-if="sent">Thank you, Frank is now processing your message.<br> Expect to hear back from us soon!</p>
        <p v-if="error">Oops, something went wrong... Please try again!</p>
        <TheLoader class="contact-frank"/>
      </div>
      <form v-if="!sent" class="contact-submit" name="contact" action="" method="post" @submit.prevent="submitForm">
      <label class="field-label required" for="name">Name</label>
      <input class="form-field" type="text" name="name" id="name" required minlength="6" v-model="name">
      <label class="field-label required" for="email">Email</label>
      <input class="form-field" type="email" name="email" id="email" required v-model="email">
      <label class="field-label required" for="message">Message</label>
      <textarea class="form-field" type="text" name="message" id="message" required v-model="message"></textarea>
      <div class="clear-submit">
        <input class="form-button clear" type="reset" value="Clear" v-if="!loading"/>
        <input class="form-button submit" type="submit" value="Send message" v-if="!loading" />
        <span v-if="loading">Sending message...</span>
      </div>
    </form>
    </transition>
  </section>
</template>
<script>
import TheLoader from '@/components/TheLoader'
import axios from 'axios'
export default {
  name: 'ContactForm',
  components: {
    TheLoader
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

  .loader
    display: block
    margin-top: 2.5rem

</style>

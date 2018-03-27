<template>
  <section class="content-container sponsors">
    <h1 class="section-title"><span role="img" aria-hidden="true">#</span>{{title}}</h1>
    <article class="description">{{content}}</article>
  </section>
</template>
<script>
export default {
  name: 'AboutSponsors',
  data: () => ({
    title: 'sponsors',
    content:
      'CSS Frankfurt would not be possible without our sponsors that you can find below. If you would like to become a sponsor, please do not hesitate to contact us. You can sponsor us with food at our events, swag, event locations etc.'
  })
}
</script>
<style lang="sass" scoped>
</style>

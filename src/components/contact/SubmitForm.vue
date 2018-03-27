<template>
  <section class="content-container submit">
    <h1 class="section-title"><span role="img" aria-hidden="true">#</span>{{title}}</h1>
    <article class="description comingsoon">{{coming}}</article>
  </section>
</template>
<script>
export default {
  name: 'SubmitForm',
  data: () => ({
    title: 'submit',
    coming: 'Form dedicated to talk proposal submissions coming soon!'
  })
}
</script>

<template>
    <main class="container">
      <page-comp :title="title" :description="description"/>
      <h2 class="item-title">Venues</h2>
      <h2 class="item-title">Organisers</h2>
      <h2 class="item-title">Sponsors</h2>

      <profile-comp
        class="profile"
        v-for="profile in about.organisers.profiles"
        :key="profile.name"
        :profile="profile"/>

    </main>
</template>
<script>
import PageComp from '@/components/PageComp'
import ProfileComp from '@/components/profiles/ProfileComp'
export default {
  name: 'AboutPage',
  components: {
    ProfileComp,
    PageComp
  },
  props: {
    title: {
      value: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    about: {
      type: Object,
      required: false,
      default: function() {
        return {profile: 'Items unavailable'}
      }
    }
  },
  data: () => ({

  })
}
</script>

<style lang="sass" scoped>

  @import "src/assets/styles/style-variables.sass"

  .item-title
    font-family: $font-secondary
    font-size: 1.2rem
    color: $black
    font-weight: 500

</style>

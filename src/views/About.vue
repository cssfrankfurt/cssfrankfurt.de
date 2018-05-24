<template>
    <main class="container">
      <page-comp :title="title" :description="description"/>
      <!-- <profile-comp :profiles="about.frank.profiles"/> -->
      <profile-comp :profiles="about.organisers.profiles"/>
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
  }
}
</script>

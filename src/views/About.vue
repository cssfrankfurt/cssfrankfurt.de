<template>
    <main class="container">
      <page-info :title="title" :description="description"/>
      <h2 class="item-title">Our organisers</h2>
      <profile-info
        v-for="profile in about.organisers.profiles"
        :key="profile.name"
        :profile="profile"/>

    </main>
</template>
<script>
import PageInfo from '@/components/PageInfo'
import ProfileInfo from '@/components/profiles/ProfileInfo'
export default {
  name: 'About',
  components: {
    ProfileInfo,
    PageInfo
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

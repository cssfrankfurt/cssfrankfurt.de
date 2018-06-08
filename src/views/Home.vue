<template>
    <main class="container">
      <page-info :title="title" :description="description"/>
      <!-- Add next event here -->
      <div class="home-content">
        <event-list :items="events"/>
      </div>
    </main>
</template>
<script>
import PageInfo from '@/components/PageInfo'
import EventList from '@/components/event-list/EventList'
export default {
  name: 'HomePage',
  components: {
    EventList,
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
    events: {
      type: Array,
      required: true,
      default: function() {
        return {profile: 'Items unavailable'}
      }
    }
  }
}
</script>


<template>
  <li class="info-item">
    <!-- Use slots? -->
    <!-- Include: DATE + LOCATION + URL + EXTRA INFO (past event, attending) -->
    <span class="date">
      <font-awesome-icon :icon="['far', 'calendar-alt']" class="info-icon" role="img" aria-hidden="true"/>
    </span>
    <span class="past-event">
      <font-awesome-icon :icon="['fas', 'info-circle']" class="info-icon" role="img" aria-hidden="true"/>
    </span>
  </li>
</template>
<script>
export default {
  props: {
    date: {
      type: String,
      required: false
    },
    location: {
      type: String,
      required: false
    },
    url: {
      type: String,
      required: false
    }
  },
  filters: {
    truncate(value, length) {
      return value.substring(0, length) + '...'
    }
  }
}
</script>
<style lang="sass" scoped>

</style>

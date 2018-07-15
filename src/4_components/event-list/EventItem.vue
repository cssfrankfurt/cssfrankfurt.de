<template>
    <li :class="{tweet: item.type === 'twitter'}" class="list-item">
        <h2 class="item-title">
            {{item.name}}
        </h2>
        <event-info-list :infos="item.info"/>
        <article class="description" v-html="$options.filters.truncate( item.description, 200)"/>
        <a :href="item.url" class="event-link">
            Read more<font-awesome-icon
                :icon="['fab', 'meetup']"
                class="event-icon"
                role="img"
                aria-hidden="true"
        /></a>
    </li>
</template>
<script>
import EventInfoList from '@/4_components/event-list/event-info/EventInfoList'

export default {
  components: {
    EventInfoList
  },
  filters: {
    truncate(value, length) {
      return value.substring(0, length) + '...'
    }
  },
  props: {
    item: {
      type: Object,
      required: true,
      default: function() {
        return {profile: 'Unavailable'}
      }
    }
  }
}
</script>

<style lang="sass" scoped>

  .list-item
    padding: .5rem 1rem
    margin-bottom: .5rem
    @include mobile
      padding: 0

  .item-type-icon
    font-size: 1.3rem
    color: $pink

  .social-icon
    color: $pink
    font-size: 1.5rem
    margin-right: .8rem
    transition: transform .1s linear
    vertical-align: baseline
    &:hover
      transform: scale(1.07)

  .event-link
    color: $black
    font-family: $font-secondary
    display: flex
    align-items: center
    justify-content: flex-end
    &:hover
      color: $pink
      font-weight: 500

  .event-icon
    color: $pink
    font-size: 1.2rem
    margin-left: .5rem

</style>

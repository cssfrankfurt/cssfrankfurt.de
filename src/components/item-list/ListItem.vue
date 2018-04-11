<template>
  <li class="list-item" :class="{tweet: item.type === 'twitter'}">
        <h2 class="item-title">
          <font-awesome-icon
            :icon="['fab', item.type]" 
            class="item-type-icon" role="img" 
            aria-hidden="true"
          />
          {{item.name}}
        </h2>
        <info-list :infos="item.info"/>

      <article class="description">{{item.description | truncate(240)}}</article>
    </li>
</template>
<script>
import InfoList from '@/components/item-list/info-list/InfoList'

export default {
  components: {
    InfoList
  },
  props: {
    item: {
      type: Object,
      required: true,
      default: function() {
        return {profile: 'Unavailable'}
      }
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

  @import "src/assets/styles/style-variables.sass"

  .list-item
    padding: 1rem 0
    border-bottom: 1px solid $lightgrey

  .item-title
    font-size: 1.3rem
    color: $black

  .description
    font-size: 1rem
    color: $black
    @include mobile
      margin: .8rem 0

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

</style>

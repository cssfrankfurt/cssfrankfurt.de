<template>
  <li class="list-item">
      <h2 class="item-title" title="item.title">{{item.title}}</h2>
      <ul class="info-list">
        <ItemInfoComponent v-for="(info, key) in item.info" :info="info" :key="info.index">
          <template slot="icon">
            <font-awesome-icon v-if="key === 'date'" :icon="['far', 'calendar-alt']" class="info-icon" role="img" aria-hidden="true"/>
            <font-awesome-icon v-if="key === 'location'" :icon="['fas', 'map-marker-alt']" class="info-icon" role="img" aria-hidden="true"/>
            <font-awesome-icon v-if="key === 'attending'" :icon="['fas', 'users']" class="info-icon" role="img" aria-hidden="true"/>
            <font-awesome-icon v-if="key === 'retweets'" :icon="['fas', 'retweet']" class="info-icon" role="img" aria-hidden="true"/>
            <font-awesome-icon v-if="key === 'favorites'" :icon="['fas', 'heart']" class="info-icon" role="img" aria-hidden="true"/>
          </template>
        </ItemInfoComponent>
      </ul>
      <article class="description" >
        {{item.description | truncate(200)}}
      </article>
    </li>
</template>
<script>
import ItemInfoComponent from '@/components/list-components/ItemInfoComponent'
export default {
  components: {
    ItemInfoComponent
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

  .info-list
    display: flex

  .item-title
    font-size: 1.3rem
    font-family: $font

  .description
    font-size: 1rem
    color: $black
    margin-bottom: .5rem
    @include mobile
      margin: .8rem 0

  .external
    position: relative
    display: block
    font-weight: bold
    color: $pink
    align-self: flex-end
    text-align: right
    &:hover
      text-decoration: underline

  .social-icon
    color: $pink
    font-size: 1.5rem
    margin-right: .8rem
    transition: transform .1s linear
    vertical-align: baseline
    &:hover
      transform: scale(1.07)

</style>

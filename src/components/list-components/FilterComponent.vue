<template>
  <li class="filter">
      <!-- <input id="all" type="radio" v-model="type" value="all"/>
      <label for="all"><span>{{all}}</span></label>
      <input id="upcoming" type="radio" v-model="type" value="upcoming"/>
      <label for="upcoming"><span>{{upcoming}}</span></label>
      <input id="past" type="radio" v-model="type" value="past"/>
      <label for="past"><span>{{past}}</span></label> -->
  </li>
</template>
<script>
export default {
  name: 'FilterComponent'
}
</script>

<style lang="sass" scoped>

  @import "src/assets/styles/style-variables.sass"
  /* FILTER STYLING */

  .filter
    text-align: right
    z-index: 98
    background: white
    margin: 1rem 0
    @include tablet
      margin: 0
      margin-bottom: 2rem
    @include mobile
      text-align: center

    input[type="radio"]
      display: none

    input[type="radio"] + label span
      font-size: .9rem
      display: inline-block
      padding: 0 .5rem
      text-align: center

    input[type="radio"]:checked + label span
      font-weight: 700
      border-bottom: 2px solid $pink
</style>

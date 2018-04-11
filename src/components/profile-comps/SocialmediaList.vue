
<template>
  <ul class="social-media-list">
    <socialmedia-item
      v-for="(socialprofile, key) in social"
      :key="socialprofile.index"
      :title="key"
      :url="socialprofile"
    >
    <template slot="icon">
      <font-awesome-icon
        :icon="['fab', key]"
        class="social-icon"
        role="img"
        aria-hidden="true"
      />
      </template>
    </socialmedia-item>
  </ul>
</template>

<script>
import SocialmediaItem from '@/components/profile-comps/SocialmediaItem'
export default {
  name: 'SocialmediaList',
  components: {
    SocialmediaItem
  },
  props: {
    social: {
      type: Object,
      required: true,
      default: function() {
        return {
          social: 'No social media accounts...'
        }
      }
    }
  }
}
</script>

<style lang="sass" scoped>

  @import "src/assets/styles/style-variables.sass"

  .social-media-list
    @include mobile
      text-align: center

</style>

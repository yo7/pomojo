<template>
  <div class="preferences-notification">
    <preferences-switch :checked="notification" :onChange="toggleNotification"></preferences-switch>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import PreferencesSwitch from './preferences-switch'

export default {
  name: 'preferences-notification',
  components: {
    PreferencesSwitch
  },
  props: {
    notification: {
      type: Boolean,
      require: true
    }
  },
  methods: {
    ...mapActions({
      toggleNotification: 'preferences/toggleNotification'
    })
  }
}
</script>

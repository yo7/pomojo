<template>
  <div class="timer-counter">
    {{ formattedTime }}
  </div>
</template>

<script>
import formatTime from './formatTime'
import {mapActions} from 'vuex'

export default {
  props: {
    seconds: {
      type: Number,
      required: true
    }
  },
  computed: {
    formattedTime() {
      return formatTime(this.seconds)
    }
  }
}
</script>

<style scoped>

</style>

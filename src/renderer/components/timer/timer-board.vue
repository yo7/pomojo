<template>
  <div class="timer-board">
    <timer-counter></timer-counter>
    <timer-button
      :running="running"
      :resting="resting"
      :pausing="pausing"
      :seconds="seconds">
    </timer-button>
    <!-- <timer-today></timer-today> -->
  </div>
</template>

<script>
import {mapState} from 'vuex'
import TimerCounter from './timer-counter'
import TimerButton from './timer-button'

export default {
  name: 'timer-board',
  components: {TimerCounter, TimerButton},
  computed: {
    ...mapState([
      'running',
      'resting',
      'pausing',
      'seconds'
    ])
  }
}
</script>

<style scoped>
.timer-board {
  height: 100%;
}
</style>

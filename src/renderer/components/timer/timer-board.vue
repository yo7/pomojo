<template>
  <div class="timer-board">
    <timer-counter></timer-counter>
    <timer-button :running="running"></timer-button>
     <timer-today :resting="resting"></timer-today>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import TimerCounter from './timer-counter'
import TimerButton from './timer-button'
import TimerToday from './timer-today'

export default {
  name: 'timer-board',
  components: {
    TimerCounter,
    TimerButton,
    TimerToday
  },
  computed: {
    ...mapState({
      running: state => state.timer.running,
      resting: state => state.timer.resting
    })
  }
}
</script>

<style scoped>
.timer-board {
  height: 100%;
}
</style>

<template>
  <div class="timer-board">
    <timer-counter :seconds="seconds"></timer-counter>
    <timer-button :running="running"></timer-button>
    <!-- <timer-today></timer-today> -->
  </div>
</template>

<script>
import TimerCounter from './timer-counter'
import TimerButton from './timer-button'

export default {
  name: 'timer-board',
  components: {TimerCounter, TimerButton},
  computed: {
    seconds() {
      return this.$store.state.seconds
    },
    running() {
      return this.$store.state.running
    }
  }
}
</script>

<style scoped>
.timer-board {
  height: 100%;
}
</style>

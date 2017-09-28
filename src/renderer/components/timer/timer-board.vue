<template>
  <div class="timer-board">
    <timer-counter :seconds="seconds"></timer-counter>
    <timer-button :seconds="seconds" :running="running" :onBreak="onBreak"></timer-button>
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
    },
    onBreak() {
      return this.$store.state.onBreak
    }
  }
}
</script>

<style scoped>
.timer-board {
  height: 100%;
}
</style>

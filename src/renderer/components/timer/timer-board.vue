<template>
  <div class="timer-board">
    <timer-counter :seconds="seconds"></timer-counter>
    <timer-button></timer-button>
  </div>
</template>

<script>
import TimerCounter from './timer-counter'
import TimerButton from './timer-button'

export default {
  name: 'timer-board',
  components: { TimerCounter, TimerButton },
  computed: {
    seconds() {
      return this.$store.state.seconds
    }
  }
}
</script>

<style scoped>
.timer-board {
  height: 100%;
}
</style>

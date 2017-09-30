<template>
  <div class="timer-board">
    <timer-counter :seconds="seconds"></timer-counter>
    <timer-button :seconds="seconds" :running="running" :onBreak="onBreak"></timer-button>
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
    ...mapState(['seconds', 'running', 'onBreak'])
  }
}
</script>

<style scoped>
.timer-board {
  height: 100%;
}
</style>

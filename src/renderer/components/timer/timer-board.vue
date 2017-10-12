<template>
  <div class="timer-board">
    <timer-counter :seconds="seconds"></timer-counter>
    <timer-button :running="running"></timer-button>
     <timer-today :resting="resting" :today="today" :goal="goal"></timer-today>
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
      seconds: state => state.timer.seconds,
      running: state => state.timer.running,
      resting: state => state.timer.resting,
      today: state => state.timer.today,
      goal: state => state.timer.goal
    })
  }
}
</script>

<style scoped>
.timer-board {
  height: 100%;
}
</style>

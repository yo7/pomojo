<template>
  <div class="timer-board">
    <timer-counter></timer-counter>
    <timer-button :running="running"></timer-button>
    <!-- <timer-today></timer-today> -->
  </div>
</template>

<script>
import {mapState} from 'vuex'
import TimerCounter from './timer-counter'
import TimerButton from './timer-button'

export default {
  name: 'timer-board',
  components: {
    TimerCounter,
    TimerButton
  },
  computed: {
    ...mapState({
      running: state => state.timer.running
    })
  }
}
</script>

<style scoped>
.timer-board {
  height: 80%;
}
</style>

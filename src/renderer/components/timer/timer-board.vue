<template>
  <div class="timer-board">
    <timer-counter
      :text="formattedSeconds">
    </timer-counter>
    <timer-button
      :status="pausable"
      :onClicked="toggle">
    </timer-button>
    <timer-reset
      :running="running"
      :pausing="pausing"
      :onClicked="reset">
    </timer-reset>
    <timer-today
      :today="today"
      :goal="goal">
    </timer-today>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
import TimerCounter from './timer-counter'
import TimerButton from './timer-button'
import TimerReset from './timer-reset'
import TimerToday from './timer-today'

export default {
  name: 'timer-board',
  components: {
    TimerCounter,
    TimerButton,
    TimerReset,
    TimerToday
  },
  computed: {
    ...mapState({
      seconds: state => state.timer.seconds,
      running: state => state.timer.running,
      resting: state => state.timer.resting,
      pausing: state => state.timer.pausing,
      today: state => state.timer.today,
      goal: state => state.preferences.goal
    }),
    ...mapGetters({
      formattedSeconds: 'timer/formattedSeconds',
      pausable: 'timer/pausable'
    })
  },
  methods: {
    ...mapActions({
      toggle: 'timer/toggle',
      reset: 'timer/reset',
      loadSeconds: 'timer/loadSeconds',
      loadToday: 'timer/loadToday'
    })
  },
  mounted() {
    this.loadToday()
    if (!this.running) {
      this.loadSeconds()
    }
  }
}
</script>

<style scoped>
.timer-board {
  height: 100%;
}
</style>

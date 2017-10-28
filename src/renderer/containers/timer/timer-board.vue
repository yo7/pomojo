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
import TimerCounter from '../../components/timer/timer-counter'
import TimerButton from '../../components/timer/timer-button'
import TimerReset from '../../components/timer/timer-reset'
import TimerToday from '../../components/timer/timer-today'
import {updateTray} from '../../helpers/tray'

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
      loadSeconds: 'timer/loadSeconds'
    })
  },
  created() {
    if (!this.running) {
      this.loadSeconds()
    }
  },
  watch: {
    formattedSeconds() {
      updateTray(this.formattedSeconds)
    }
  }
}
</script>

<style scoped>
.timer-board {
  height: 100%;
}
</style>

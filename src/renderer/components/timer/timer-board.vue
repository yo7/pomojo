<template>
  <div class="timer-board">
    <timer-counter></timer-counter>
    <timer-button></timer-button>
  </div>
</template>

<script>
import TimerCounter from './timer-counter'
import TimerButton from './timer-button'

export default {
  components: {
    'timer-counter': TimerCounter,
    'timer-button': TimerButton
  }
}
</script>

<style scoped>

</style>

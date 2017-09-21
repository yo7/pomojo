<template>
  <timer-board></timer-board>
</template>

<script>
import TimerBoard from './components/timer/timer-board'

export default {
  name: 'app',
  components: {
    'timer-board': TimerBoard
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div class="container">
    <timer-board></timer-board>
  </div>
</template>

<script>
import TimerBoard from './components/timer/timer-board'

export default {
  name: 'app',
  components: { TimerBoard }
}
</script>

<style>
@import './style/typography.css';
@import './style/color.css';

.container {
  border-radius: 5px;
  height: 420px;
  width: 280px;
  background-color: var(--background);
  margin: 0 auto;
  margin-top: 10px;
  position: relative;
}

.container:before,
.container:after {
  border-left: solid transparent 10px;
  border-right: solid transparent 10px;
  border-bottom: solid var(--background) 10px;
  top: -10px;
  content: " ";
  height: 0;
  left: 50%;
  margin-left: -11px;
  position: absolute;
  width: 0;
}
</style>

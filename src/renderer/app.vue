<template>
  <div class="container">
    <base-navigation></base-navigation>
    <div class="board">
      <timer-board></timer-board>
    </div>
  </div>
</template>

<script>
import BaseNavigation from './components/base-navigation'
import TimerBoard from './components/timer/timer-board'

export default {
  name: 'app',
  components: {
    BaseNavigation,
    TimerBoard
  }
}
</script>

<style lang="scss">
@import './style/base.scss';
@import './style/typography.scss';
@import './style/color.scss';

.container {
  border-radius: 5px;
  height: 420px;
  width: 280px;
  background-color: $background;
  margin: 0 auto;
  margin-top: 10px;
  position: relative;

  &:before,
  &:after {
    border-left: solid transparent 10px;
    border-right: solid transparent 10px;
    border-bottom: solid $background 10px;
    top: -10px;
    content: " ";
    height: 0;
    left: 50%;
    margin-left: -11px;
    position: absolute;
    width: 0;
  }
}

.board {
  height: 90%;
}
</style>

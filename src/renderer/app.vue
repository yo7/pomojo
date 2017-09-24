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

<style lang="sass" scoped>
$color: #fff

.container
  border-radius: 5px
  height: 420px
  width: 280px
  background-color: $bg-color
  margin: 0 auto
  margin-top: 10px
  position: relative
  &:before,
  &:after
    border-left: solid transparent 10px
    border-right: solid transparent 10px
    border-bottom: solid $bg-color 10px
    top: -10px
    content: " "
    height: 0
    left: 50%
    margin-left: -11px
    position: absolute
    width: 0
</style>

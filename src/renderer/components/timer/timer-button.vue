<template>
  <div class="timer-button">
    <div class="timer-icon">
      <i
        class="icon fa"
        :class="{'fa-pause': running, 'fa-play': !running}"
         @click="toggle">
      </i>
    </div>
    <timer-reset></timer-reset>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import TimerReset from './timer-reset'

export default {
  name: 'timer-button',
  components: {TimerReset},
  props: {
    running: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  methods: {
    ...mapActions({
      toggle: 'timer/toggle'
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/color.scss';
.timer-button {
  height: 30%;
}

.timer-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  color: $primary-text;
  border-radius: 50%;
  padding: 10px;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.5s;
  padding: 2rem;

  &:before {
    transition: font-size 0.5s;
    font-size: 3rem;
  }

  &.fa-play:before {
    margin-left: 0.5rem;
  }

  &:hover {
    background-color: $effect;

    &:before {
      font-size: 2.5rem;
    }
  }
}
</style>

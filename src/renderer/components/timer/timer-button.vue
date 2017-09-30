<template>
  <div class="timer-button">
    <div class="timer-icon">
      <i
        class="icon fa"
        :class="{'fa-pause': running, 'fa-play': !running}"
         @click="onButtonClick">
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
    },
    pausing: {
      type: Boolean,
      default: false,
      required: true
    },
    onBreak: {
      type: Boolean,
      default: false,
      required: true
    },
    seconds: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      timerId: 0
    }
  },
  methods: {
    ...mapActions([
      'updateRunning',
      'updatePausing',
      'updateOnBreak',
      'updateCount'
    ]),
    async onButtonClick() {
      await this.updateRunning(!this.running)
      this.updatePausing(!this.pausing)
      this.update()
    },
    update() {
      if (!this.running) {
        this.updatePausing(true)
        return clearInterval(this.timerId)
      }
      this.updatePausing(false)
      this.timerId = setInterval(() => {
        this.onSecondElapsed()
      }, 1000)
    },
    onSecondElapsed() {
      if (this.seconds === 0) {
        return this.onExpired()
      }
      this.updateCount(this.seconds - 1)
    },
    onExpired() {
      if (this.onBreak) {
        this.reset()
      } else {
        this.updateOnBreak(true)
        this.updateCount(300)
      }
    },
    async reset() {
      await this.updateCount(1500)
      await this.updateRunning(false)
      await this.updateOnBreak(false)
      return clearInterval(this.timerId)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/color.scss';
.timer-button {
  height: 20%;
}

.timer-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
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

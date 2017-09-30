<template>
  <div class="timer-button">
    <div class="timer-icon" @click="onButtonClick">
      <i
        class="icon fa"
        :class="{'fa-pause': running, 'fa-play': !running}">
      </i>
    </div>
    <div class="reset-text">
      <span v-show="pausing && seconds != 1500" @click="onResetClick">
        reset?
      </span>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'timer-button',
  props: {
    running: {
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
      timerId: 0,
      pausing: false
    }
  },
  methods: {
    ...mapActions([
      'updateRunning',
      'updateOnBreak',
      'updateCount'
    ]),
    async onButtonClick() {
      await this.updateRunning(!this.running)
      this.update()
    },
    onResetClick() {
      // TODO: use config value
      this.reset()
    },
    update() {
      if (!this.running) {
        this.pausing = true
        return clearInterval(this.timerId)
      }
      this.pausing = false
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

.reset-text {
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  color: $highlight;

  span {
    cursor: pointer;
  }
}
</style>

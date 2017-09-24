<template>
  <div class="timer-button">
    <div class="timer-icon">
      <i
        class="icon fa"
        :class="{'fa-pause': running, 'fa-play': !running}"
        @click="handleButtonClick">
      </i>
    </div>
    <div class="reset-text">
      <span v-show="pausing" @click="handleResetClick">
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
      default: false
    },
    onBreak: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      timerId: 0,
      pausing: false
    }
  },
  computed: {
    currentSeconds() {
      return this.$store.state.seconds
    }
  },
  methods: {
    ...mapActions([
      'toggleTimer',
      'updateCount'
    ]),
    handleButtonClick() {
      if (this.currentSeconds === 0) {
        this.timerHasExpired()
      }
      this.toggleTimer().then(() => this.updateTimer())
    },
    handleResetClick() {
      // TODO: use config value
      this.initializeTimer(25).then(() => this.pausing = false)
    },
    timerHasExpired() {
      // TODO: use config value
      this.onBreak ? this.initializeTimer(5) : this.initializeTimer(25)
    },
    updateTimer() {
      if (!this.running) {
        this.pausing = true
        return clearInterval(this.timerId)
      }
      this.pausing = false
      this.timerId = setInterval(() => {
        this.updateCount(this.currentSeconds - 1)
      }, 1000)
    },
    initializeTimer(minutes) {
      return new Promise(resolve => {
        this.updateCount(minutes * 60)
        resolve()
      })
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

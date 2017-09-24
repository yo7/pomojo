<template>
  <div class="timer-button">
    <div class="timer-icon">
      <i
        class="icon fa"
        :class="{'fa-pause': running, 'fa-play': !running}"
        @click="handleTimerClick">
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
    running: Boolean,
    default: false
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
    handleTimerClick() {
      const self = this
      this.toggleTimer()
        .then(() => {
          if (!self.running) {
            self.pausing = true
            return clearInterval(self.timerId)
          }
          self.pausing = false
          self.timerId = setInterval(() => {
            self.updateCount(self.currentSeconds - 1)
          }, 1000)
        })
        .catch(err => console.error(err))
    },
    handleResetClick() {
      const workMintues = 25

      this.updateCount(workMintues * 60)
      this.pausing = false
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

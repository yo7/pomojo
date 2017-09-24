<template>
  <div class="timer-button">
    <i
      class="icon fa"
      :class="{'fa-pause': running, 'fa-play': !running}"
      @click="handleClick">
    </i>
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
      timerId: 0
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
    handleClick() {
      const self = this
      this.toggleTimer()
        .then(() => {
          if (!self.running) {
            return clearInterval(self.timerId)
          }
          self.timerId = setInterval(() => {
            self.updateCount(self.currentSeconds - 1)
          }, 1000)
          console.log(self.timerId)
        })
        .catch(err => console.error(err))
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/color.scss';

.timer-button {
  display: flex;
  height: 20%;
  align-items: center;
  justify-content: center;
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

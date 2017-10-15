<template>
  <div class="timer-counter">
    {{ formattedTime }}
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import formatTime from '../../helpers/format-time'
import * as tray from '../../helpers/tray'

export default {
  props: {
    seconds: {
      type: Number,
      required: true
    },
    running: {
      type: Boolean,
      require: true
    },
    pausing: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    formattedTime() {
      return formatTime(this.seconds)
    }
  },
  methods: {
    ...mapActions({
      initializeSeconds: 'timer/initializeSeconds'
    })
  },
  mounted() {
    if (!this.running) {
      this.initializeSeconds()
    }
  },
  updated() {
    tray.update(this.formattedTime)
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/color.scss';

.timer-counter {
  color: $primary-text;
  display: flex;
  align-items: center;
  height: 50%;
  justify-content: center;
  font-size: 3.5rem;
  font-weight: 500;
}
</style>

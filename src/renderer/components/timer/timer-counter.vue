<template>
  <div class="timer-counter">
    {{ formattedTime }}
  </div>
</template>

<script>
import formatTime from '../../helpers/format-time'
import * as tray from '../../helpers/tray'

export default {
  props: {
    seconds: {
      type: Number,
      required: true,
      default: 25 * 60
    }
  },
  computed: {
    formattedTime() {
      return formatTime(this.seconds)
    }
  },
  mounted() {
    tray.initialize()
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

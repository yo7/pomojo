<template>
  <div class="timer-counter">
    {{ formattedTime }}
  </div>
</template>

<script>
import formatTime from './format-time'

export default {
  props: {
    seconds: {
      type: Number,
      required: true
    }
  },
  computed: {
    formattedTime() {
      return formatTime(this.seconds)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/color.scss';

.timer-counter {
  color: $primary-text;
  display: flex;
  align-items: center;
  height: 60%;
  justify-content: center;
  font-size: 3.5rem;
  font-weight: 500;
}
</style>

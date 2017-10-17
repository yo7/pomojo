<template>
  <div class="timer-counter">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
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
  height: 50%;
  justify-content: center;
  font-size: 4rem;
  font-weight: 500;
}
</style>

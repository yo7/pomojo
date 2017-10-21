<template>
  <div class="timer-reset">
    <span v-show="resettable" @click="onClicked">
      reset
    </span>
  </div>
</template>

<script>
export default {
  name: 'timer-reset',
  props: {
    running: {
      type: Boolean,
      required: true
    },
    pausing: {
      type: Boolean,
      required: true
    },
    onClicked: {
      type: Function,
      requied: true
    }
  },
  computed: {
    resettable() {
      return this.running && this.pausing
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/color.scss';

.timer-reset {
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
  color: $highlight;
  height: 10%;

  span {
    cursor: pointer;
  }
}
</style>

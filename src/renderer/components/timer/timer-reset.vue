<template>
  <div class="timer-reset">
    <span v-show="resettable" @click="reset">
      reset
    </span>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

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
    }
  },
  computed: {
    resettable() {
      return this.running && this.pausing
    }
  },
  methods: {
    ...mapActions({
      reset: 'timer/reset'
    })
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

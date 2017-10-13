<template>
  <div class="timer-reset">
    <span v-show="resettable" @click="reset">
      reset
    </span>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'timer-reset',
  props: {
    pausing: {
      type: Boolean,
      required: true
    },
    seconds: {
      type: Number,
      required: true
    }
  },
  computed: {
    resettable() {
       return this.pausing && this.seconds !== 1500
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

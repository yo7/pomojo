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
  computed: {
    ...mapGetters({
      resettable: 'timer/resettable'
    })
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
  margin-top: 0.5rem;

  span {
    cursor: pointer;
  }
}
</style>

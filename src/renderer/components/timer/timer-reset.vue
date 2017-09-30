<template>
  <div class="timer-reset">
    <span v-show="resettable" @click="reset">
      reset?
    </span>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'timer-reset',
  computed: {
    ...mapGetters([
      'resettable'
    ])
  },
  methods: {
    ...mapActions([
      'reset'
    ])
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/color.scss';

.timer-reset {
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  color: $highlight;

  span {
    cursor: pointer;
  }
}
</style>

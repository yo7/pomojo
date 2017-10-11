<template>
  <div class="timer-counter">
    {{ formattedTime }}
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import * as tray from '../../helpers/tray'

export default {
  computed: {
    ...mapGetters({
      formattedTime: 'timer/formattedTime'
    })
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

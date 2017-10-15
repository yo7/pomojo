<template>
  <div class="timer-counter">
    {{ formattedSeconds }}
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  props: {
    running: {
      type: Boolean,
      require: true
    }
  },
  computed: {
    ...mapGetters({
      formattedSeconds: 'timer/formattedSeconds'
    })
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

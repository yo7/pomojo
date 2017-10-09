<template>
  <div class="timer-today">
    <progress class="progress" :value="percentage" max="100">70 %</progress>
    <span class="text">
      {{ today }}/{{ goal }}
    </span>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'timer-today',
  props: {
    resting: {
      type: Boolean,
      default: false,
      required: true
    },
    today: {
      type: Number,
      default: 0,
      requried: true
    },
    goal: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      percentage: 'timer/percentage'
    })
  },
  methods: {
    ...mapActions({
      initializeToday: 'timer/initializeToday'
    })
  },
  mounted() {
    this.initializeToday()
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/color.scss';

.timer-today {
  height: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.progress {
  border: none;
  border-radius: 5rem;
  height: 0.6rem;
  overflow: hidden;
  flex-basis: 75%;
  -webkit-appearance: none;

  &::-webkit-progress-bar {
    background-color: $light;
  }

  &::-webkit-progress-value {
    background-color: $highlight;
  }
}

.text {
  color: $secondary-text;
  display: inline-block;
  flex-basis: auto;
  font-size: 1rem;
  font-weight: 200;
}
</style>
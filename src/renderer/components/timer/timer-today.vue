<template>
  <div class="timer-today" v-if="isLoaded">
    <div class="text">
      {{ today }}/{{ goal }}
    </div>
    <progress class="progress" :value="percentage" max="100"></progress>
  </div>
</template>

<script>
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
      requried: true
    },
    goal: {
      type: Number,
      required: true
    }
  },
  computed: {
    percentage() {
      return (this.today / this.goal) * 100
    },
    isLoaded() {
      return this.today !== undefined && (this.goal !== undefined && this.goal !== 0)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/color.scss';

.timer-today {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 20%;
  padding: 0.5rem 1rem;
}

.text {
  color: $secondary-text;
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 200;
  margin-left: auto;
}

.progress {
  border: none;
  border-radius: 5rem;
  height: 0.8rem;
  width: 100%;
  overflow: hidden;
  -webkit-appearance: none;

  &::-webkit-progress-bar {
    background-color: $light;
  }

  &::-webkit-progress-value {
    background-color: $highlight;
  }
}
</style>
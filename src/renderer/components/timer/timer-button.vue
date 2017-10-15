<template>
  <div class="timer-button">
    <i
      class="icon fa"
      :class="{'fa-pause': pausable, 'fa-play': !pausable}"
       @click="toggle">
    </i>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'timer-button',
  computed: {
    ...mapGetters({
      pausable: 'timer/pausable'
    })
  },
  methods: {
    ...mapActions({
      toggle: 'timer/toggle'
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/color.scss';

.timer-button {
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  color: $primary-text;
  border-radius: 50%;
  padding: 10px;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.5s;
  padding: 2rem;

  &:before {
    transition: font-size 0.5s;
    font-size: 3rem;
  }

  &.fa-play:before {
    margin-left: 0.5rem;
  }

  &:hover {
    background-color: $effect;

    &:before {
      font-size: 2.5rem;
    }
  }
}
</style>

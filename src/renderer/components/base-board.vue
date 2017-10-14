<template>
  <div class="board">
    <router-view></router-view>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'base-board',
  methods: {
    ...mapActions({
      initializeToday: 'timer/initializeToday',
      initializeGoal: 'preferences/initializeGoal'
    })
  },
  mounted() {
    this.initializeGoal()
    this.initializeToday()
  }
}
</script>

<style lang="scss" scoped>
.board {
  height: 90%;
}
</style>

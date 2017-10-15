<template>
  <div class="board">
    <router-view></router-view>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import * as tray from '../helpers/tray'

export default {
  name: 'base-board',
  methods: {
    ...mapActions({
      initializeToday: 'timer/initializeToday',
      initializeWorkMinutes: 'preferences/initializeWorkMinutes',
      initializeRestMinutes: 'preferences/initializeRestMinutes',
      initializeGoal: 'preferences/initializeGoal'
    })
  },
  mounted() {
    this.initializeToday()
    this.initializeWorkMinutes()
    this.initializeRestMinutes()
    this.initializeGoal()
    tray.initialize()
  }
}
</script>

<style lang="scss" scoped>
.board {
  height: 90%;
}
</style>

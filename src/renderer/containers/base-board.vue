<template>
  <div class="base-board">
    <router-view></router-view>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'base-board',
  methods: {
    ...mapActions({
      loadWorkMinutes: 'preferences/loadWorkMinutes',
      loadRestMinutes: 'preferences/loadRestMinutes',
      loadGoal: 'preferences/loadGoal',
      loadNotification: 'preferences/loadNotification',
      loadToday: 'timer/loadToday'
    })
  },
  created() {
    this.loadWorkMinutes()
    this.loadRestMinutes()
    this.loadGoal()
    this.loadNotification()
    this.loadToday()
  }
}
</script>

<style lang="scss" scoped>
.base-board {
  height: 90%;
}
</style>

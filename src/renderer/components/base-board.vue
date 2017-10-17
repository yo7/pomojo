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
      loadWorkMinutes: 'preferences/loadWorkMinutes',
      loadRestMinutes: 'preferences/loadRestMinutes',
      loadGoal: 'preferences/loadGoal',
      loadNotification: 'preferences/loadNotification'
    })
  },
  mounted() {
    this.loadWorkMinutes()
    this.loadRestMinutes()
    this.loadGoal()
    this.loadNotification()
  }
}
</script>

<style lang="scss" scoped>
.board {
  height: 90%;
}
</style>

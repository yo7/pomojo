<template>
  <div class="board">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'base-board'
}
</script>

<style lang="scss" scoped>
.board {
  height: 90%;
}
</style>

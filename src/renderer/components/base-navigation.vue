<template>
  <div class="base-navigation">
    <span class="nav-item" @click="close">
      <i class="fa fa-2x fa-power-off"></i>
    </span>
  </div>
</template>

<script>
import app from '../helpers/app'

export default {
  name: 'base-navigation',
  methods: {
    close() {
      app.close()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/color.scss';

.base-navigation {
  height: 10%;
  padding: 10px;
}

.nav-item {
  float: right;  
  color: $highlight;
  cursor: pointer;
}
</style>

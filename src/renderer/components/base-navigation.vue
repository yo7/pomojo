<template>
  <div class="base-navigation">
    <div v-if="this.$route.path === '/'">
      <router-link to="/preferences">
        <span class="nav-item">
          <i class="fa fa-2x fa-cog"></i>
        </span>
      </router-link>
    </div>
    <div v-else>
      <router-link to="/">
        <span class="nav-item">
          <i class="fa fa-2x fa-times"></i>
        </span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'base-navigation'
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

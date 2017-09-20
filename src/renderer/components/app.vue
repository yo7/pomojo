<template>
  <div>{{ msg }}</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'this is a message'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

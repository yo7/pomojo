<template>
  <span class="preferences-quit" @click="quit">
    <i class="fa fa-power-off icon"></i>
    Quit Pomojo
  </span>
</template>

<script>
import app from '../../helpers/app'

export default {
  name: 'preferences-quit',
  methods: {
    quit: () => app.close()
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/color.scss';

.preferences-quit {
  color: $secondary-text;
  cursor: pointer;
  padding: 0.5rem;
  margin: 0 auto;
  vertical-align: middle;
}

.icon {
  font-size: 1.1rem;
  margin-right: 0.2rem;
  vertical-align: middle;
}
</style>
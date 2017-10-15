<template>
  <div class="preferences-row">
    <p class="title">{{title}}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'preferences-row',
  props: {
    title: {
      type: String,
      require: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/color.scss";

.preferences-row {
  align-items: center;
  display: flex;
  justify-content: space-between;

  &:not(:first-child) {
    margin-top: 1rem;
  }
}

.title {
  font-size: 1.5rem;
  font-weight: 500;
  display: inline-block;
}
</style>
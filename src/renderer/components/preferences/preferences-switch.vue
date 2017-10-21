<template>
  <span>
    <input
      type="checkbox"
      id="switch"
      class="switch"
      :checked="checked"
      @change="onChanged">
    <label class="label" for="switch"></label>
  </span>
</template>

<script>
export default {
  name: 'preferences-switch',
  props: {
    checked: {
      type: Boolean,
      required: true
    },
    onChanged: {
      type: Function,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/color";

.switch {
  display: none;

  &:checked + .label {
    background-color: $highlight;

    &:after {
      left: 2.2rem;
    }
  }
}

.label {
  position:relative;
  display: block;
  cursor: pointer;
  width: 4rem;
  height: 2rem;
  background: $light;
  transition: .2s;
  border-radius: 1rem;

  &:after {
    position:absolute;
    display:block;
    content:"";
    width:1.6rem;
    height:1.6rem;
    border-radius:50%;
    background-color:#fff;
    top: 0.2rem;
    left: 0.2rem;
    transition: 0.2s;
  }
}
</style>
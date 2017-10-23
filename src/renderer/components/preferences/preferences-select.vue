<template>
  <label class="preferences-select">
    <select class="select" @change="update">
      <option
        v-for="option in options"
        :value="option"
        :selected="option === current">
        {{option}}
      </option>
    </select>
  </label>
</template>

<script>
export default {
  name: 'preferences-select',
  props: {
    options: {
      type: Array[Number],
      required: true
    },
    current: {
      type: Number,
      required: true
    },
    onChanged: {
      type: Function,
      required: true
    }
  },
  methods: {
    update(event) {
      this.onChanged(Number(event.target.value))
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/color.scss";

.preferences-select {
  position:relative;

  &:after {
    content: "\f078";
    font-family: "FontAwesome";
    color: $light;
    right: 0.5rem;
    top: 0.8rem;
    pointer-events: none;
    position: absolute;
  }
}

.select {
  -webkit-appearance: none;
  appearance: none;
  border-radius: 0.3rem;
  border: 3px solid $light;
  display: inline-block;
  font-size: 1rem;
  padding: 0.3rem 1rem;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  background: none transparent;
  vertical-align: middle;
  width: 5rem;

  &:focus {
    outline: none;
  }
}
</style>

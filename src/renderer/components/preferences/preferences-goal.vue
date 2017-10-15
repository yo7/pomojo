<template>
  <div class="preferences-goal">
    <div class="content">
      <p class="title">Goal</p>
    </div>
    <div class="setting">
      <label>
        <select class="select" @change="update">
          <option v-for="goalCount in goalCounts" :value="goalCount" :selected="goal === goalCount">
            {{goalCount}}
          </option>
        </select>
      </label>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'preferences-goal',
  props: {
    goal: {
      type: Number,
      required: true
    }
  },
  data: () => ({goalCounts: Array.from(Array(16).keys())}),
  methods: {
    ...mapActions({
      updateGoal: 'preferences/updateGoal'
    }),
    update(event) {
      this.updateGoal(Number(event.target.value))
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/color.scss";

.preferences-goal {
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
}

.title {
  font-size: 2rem;
  font-weight: 500;
  display: inline-block;
}

label {
  position:relative
}

label:after {
  content: "\f078";
  font-family: "FontAwesome";
  color: $light;
  right: 0.5rem;
  top: 0.2rem;
  pointer-events: none;
  position:absolute;
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
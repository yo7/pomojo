<template>
  <div class="preferences-board">
    <preferences-goal :goal="goal"></preferences-goal>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import PreferencesGoal from './preferences-goal'

export default {
  name: 'preferences-board',
  components: {
    PreferencesGoal
  },
  computed: {
    ...mapState({
      goal: state => state.preferences.goal
    })
  }
}
</script>

<style>
.preferences-board {
  height: 100%;
}
</style>
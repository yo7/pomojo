<template>
  <div class="preferences-board">
    <preferences-row title="Work Minutes">
      <preferences-work :workMinutes="workMinutes"></preferences-work>
    </preferences-row>
    <preferences-row title="Rest Minutes">
      <preferences-rest :restMinutes="restMinutes"></preferences-rest>
    </preferences-row>
    <preferences-row title="Daily Goal">
      <preferences-goal :goal="goal"></preferences-goal>
    </preferences-row>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import PreferencesRow from './preferences-row.vue'
import PreferencesWork from './preferences-work.vue'
import PreferencesRest from './preferences-rest.vue'
import PreferencesGoal from './preferences-goal'

export default {
  name: 'preferences-board',
  components: {
    PreferencesRow,
    PreferencesWork,
    PreferencesRest,
    PreferencesGoal
  },
  computed: {
    ...mapState({
      workMinutes: state => state.preferences.workMinutes,
      restMinutes: state => state.preferences.restMinutes,
      goal: state => state.preferences.goal
    })
  }
}
</script>

<style>
.preferences-board {
  height: 100%;
  padding: 1rem;
}
</style>
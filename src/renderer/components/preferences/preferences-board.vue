<template>
  <div class="preferences-board">
    <preferences-row title="Work Minutes">
      <preferences-select
        :options="workMinutesOptions"
        :current="workMinutes"
        :onChanged="updateWorkMinutes">
      </preferences-select>
    </preferences-row>
    <preferences-row title="Rest Minutes">
      <preferences-select
        :options="restMinutesOptions"
        :current="restMinutes"
        :onChanged="updateRestMinutes">
      </preferences-select>
    </preferences-row>
    <preferences-row title="Daily Goal">
      <preferences-select
        :options="goalCounts"
        :current="goal"
        :onChanged="updateGoal">
      </preferences-select>
    </preferences-row>
    <preferences-row title="Notification">
      <preferences-switch
        :checked="notification"
        :onChanged="toggleNotification">
      </preferences-switch>
    </preferences-row>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import PreferencesRow from './preferences-row'
import PreferencesSelect from './preferences-select'
import PreferencesSwitch from './preferences-switch'

export default {
  name: 'preferences-board',
  components: {
    PreferencesRow,
    PreferencesSelect,
    PreferencesSwitch
  },
  data: () => ({
    workMinutesOptions: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55],
    restMinutesOptions: [1, 3, 5, 10, 15, 20],
    goalCounts: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  }),
  computed: {
    ...mapState({
      workMinutes: state => state.preferences.workMinutes,
      restMinutes: state => state.preferences.restMinutes,
      goal: state => state.preferences.goal,
      notification: state => state.preferences.notification
    })
  },
  methods: {
    ...mapActions({
      updateWorkMinutes: 'preferences/updateWorkMinutes',
      updateRestMinutes: 'preferences/updateRestMinutes',
      updateGoal: 'preferences/updateGoal',
      toggleNotification: 'preferences/toggleNotification'
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
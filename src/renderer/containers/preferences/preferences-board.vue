<template>
  <div class="preferences-board">
    <div class="rows">
      <div class="row">
        <preferences-row title="Work Minutes">
          <preferences-select
            :options="workMinutesOptions"
            :current="workMinutes"
            :onChanged="updateWorkMinutes">
          </preferences-select>
        </preferences-row>
      </div>
      <div class="row">
        <preferences-row title="Rest Minutes">
          <preferences-select
            :options="restMinutesOptions"
            :current="restMinutes"
            :onChanged="updateRestMinutes">
          </preferences-select>
        </preferences-row>
      </div>
      <div class="row">
        <preferences-row title="Daily Goal">
          <preferences-select
            :options="goalCounts"
            :current="goal"
            :onChanged="updateGoal">
          </preferences-select>
        </preferences-row>
      </div>
      <div class="row">
        <preferences-row title="Notification">
          <preferences-switch
            :checked="notification"
            :onChanged="toggleNotification">
          </preferences-switch>
        </preferences-row>
      </div>
    </div>
    <div class="bottom">
      <preferences-quit></preferences-quit>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import PreferencesRow from '../../components/preferences/preferences-row'
import PreferencesSelect from '../../components/preferences/preferences-select'
import PreferencesSwitch from '../../components/preferences/preferences-switch'
import PreferencesQuit from '../../components/preferences/preferences-quit'

export default {
  name: 'preferences-board',
  components: {
    PreferencesRow,
    PreferencesSelect,
    PreferencesSwitch,
    PreferencesQuit
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

<style lang="scss" scoped>
.preferences-board {
  height: 100%;
  padding: 1rem;
}

.rows {
  height: 95%;
}

.row:not(:first-child) {
  margin-top: 1.5rem;
}

.bottom {
  height: 5%;
  text-align: center;
}
</style>
<template>
  <div class="preferences-goal">
    <preferences-select :options="workMinutesOptions" :current="workMinutes" :onChange="updateWorkMinutes"></preferences-select>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import PreferencesSelect from './preferences-select.vue'

export default {
  name: 'preferences-work',
  components: {
    PreferencesSelect
  },
  props: {
    workMinutes: {
      type: Number,
      require: true
    }
  },
  data: () => ({
    workMinutesOptions: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]
  }),
  methods: {
    ...mapActions({
      updateWorkMinutes: 'preferences/updateWorkMinutes'
    })
  }
}
</script>

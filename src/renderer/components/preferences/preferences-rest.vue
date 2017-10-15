<template>
  <div class="preferences-goal">
    <preferences-select :options="restMinutesOptions" :current="restMinutes" :onChange="updateRestMinutes"></preferences-select>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import PreferencesSelect from './preferences-select.vue'

export default {
  name: 'preferences-rest',
  components: {
    PreferencesSelect
  },
  props: {
    restMinutes: {
      type: Number,
      require: true
    }
  },
  data: () => ({
    restMinutesOptions: [1, 3, 5, 10, 15, 20]
  }),
  methods: {
    ...mapActions({
      updateRestMinutes: 'preferences/updateRestMinutes'
    })
  }
}
</script>

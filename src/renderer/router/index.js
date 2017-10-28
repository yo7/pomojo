import Vue from 'vue'
import VueRouter from 'vue-router'
import TimerBoard from '../containers/timer/timer-board.vue'
import PreferencesBoard from '../containers/preferences/preferences-board.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {path: '/', component: TimerBoard},
    {path: '/preferences', component: PreferencesBoard}
  ]
})

export default router

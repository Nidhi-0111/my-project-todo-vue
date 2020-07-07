import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Slots from './components/Slots.vue'
// import SlotData from './components/SlotData.vue'
import Message from './components/Message.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/slots',
      name: 'slots',
      component: Slots
    },
    // {
    //   path: '/slotsScope',
    //   name: 'slotsScope',
    //   component: SlotData
    // },
    {
      path: '/communication',
      name: 'communication',
      component: Message
    }
  ]
})

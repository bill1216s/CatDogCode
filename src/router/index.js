import { createRouter, createWebHistory } from "vue-router"
import MissionList from "../MissionList.vue"
import MissionDetail from "../views/MissionDetail.vue"

const routes = [
  {
    path: "/",
    name:  'MissionsList',
    component: MissionList
  },
  {
    path: "/mission/:id",
    name:  'MissionDetail',
    component: MissionDetail
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router

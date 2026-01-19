import { createRouter, createWebHistory } from "vue-router"
import MissionList from "../MissionList.vue"
import MissionDetail from "../MissionDetail.vue"

const routes = [
  {
    path: "/",
    component: MissionList
  },
  {
    path: "/mission/:id",
    component: MissionDetail
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

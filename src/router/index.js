import { createRouter, createWebHistory } from "vue-router"
import MissionList from "../MissionList.vue"
import MissionDetail from "../views/MissionDetail.vue"
import Signup from "../views/Signup.vue"
import { loading } from "../main"


const routes = [
  {
    path: "/",
    name: 'MissionsList',
    component: MissionList
  },
  {
    path: "/mission/:id",
    name: 'MissionDetail',
    component: MissionDetail
  },
  {
    path: "/signup",
    component: Signup
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  loading.value = true
  console.log(1)
  next()
})

router.afterEach(() => {
  loading.value = false
  console.log(2)
})

router.isReady().then(() => {
  loading.value = false
  console.log(3)
})

export default router

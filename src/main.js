import { createApp, ref } from "vue"
import App from "./App.vue"
import router from "./router"
import "./style.css"


export const loading = ref(true)

const app = createApp(App)
app.config.globalProperties.$loading = loading
app.use(router).mount("#app")

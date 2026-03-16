<template>
  <Header />

  <section v-if="route.path === '/'" class="banner mb-8">
    <img
      src="https://via.placeholder.com/800x200?text=Banner"
      alt="Banner"
      class="w-full h-auto rounded-lg"
    />
  </section>

  <Loading v-if="$loading.value" />

  <main v-else class="content">
    <MissionList v-if="route.path === '/'" />
    <router-view v-else />
  </main>

  <footer class="mt-12 py-8 text-center text-sm text-gray-500">
    © 2026 CatDogCode. All rights reserved.
  </footer>
</template>

<script setup>
import { useRoute } from "vue-router"
import Header from "./Header.vue"
import Loading from "./components/Loading.vue"
import MissionList from "./MissionList.vue"

const route = useRoute()
</script>

<style>
.content {
  padding: 32px;
}

.logo {
  height: 32px;
}
</style>

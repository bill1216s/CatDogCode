<template>
  <Header />
  <Loading v-if="$loading.value" />
  <main v-else class="content">
    <router-view />
  </main>
</template>

<script>
import Header from "./Header.vue"
import Loading from "./components/Loading.vue"

export default {
  components: {
    Header,
    Loading
  }
}
</script>

<style>
.content {
  padding: 32px;
}

.logo {
  height: 32px;
}
</style>

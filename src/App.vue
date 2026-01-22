<template>
  <div>
    <Header />

    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from "./Header.vue"

export default {
  name: "App",
  components: {
    Header,
  }
}
</script>

<style>
.content {
  padding: 32px;
}
</style>

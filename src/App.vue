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

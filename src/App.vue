<template>
  <div>
    <Header />

    <main class="content">
      <h2>任務列表</h2>
      <MissionList />
    </main>
  </div>
</template>

<script>
import Header from "./Header.vue"
import MissionList from "./MissionList.vue"

export default {
  name: "App",
  components: {
    Header,
    MissionList
  }
}
</script>

<style>
.content {
  padding: 32px;
}
</style>

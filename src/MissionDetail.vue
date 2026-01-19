<template>
  <div class="detail">
    <h2>任務詳情</h2>
    <p>任務 ID：{{ id }}</p>
  </div>
</template>

<script>
export default {
  name: "MissionDetail",
  computed: {
    id() {
      return this.$route.params.id
    }
  }
}
</script>

<style>
.detail {
  padding: 32px;
}
</style>

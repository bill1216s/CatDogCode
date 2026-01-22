<template>
  <div class="detail">
     <h2>{{ mission.title }}</h2>
     <p>獎勵：{{ mission.reward }}</p>
     <h2>Mission Detail Page</h2>


  </div>
</template>

<script>
export default {
  name: "MissionDetail",
  computed: {
    mission() {
      const missions = [
        { id: 1, title: "開箱指定商品", reward: "NT$1,000"},
        { id: 2, title: "拍攝體驗影片", reward: "NT$2,000" },
        { id: 3, title: "分享社群貼文", reward: "NT$800" },
        { id: 4, title: "分享社群123貼文", reward: "NT$800" }
      ]

      return missions.find(
        m => m.id === this.$route.params.id
      )
    }
  }
}
</script>

<style>
.detail {
  padding: 32px;
}
</style>

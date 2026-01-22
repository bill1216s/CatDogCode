<template>
<div>MissionList OK</div>

  <section class="list">
    <h2>任務列表</h2>
    <MissionCard
      v-for="mission in missions"
      :id="mission.id"
      :key="mission.id"
      :title="mission.title"
      :reward="mission.reward"
    />
  </section>
</template>

<script>
import MissionCard from "./MissionCard.vue"

export default {
  name: "MissionList",
  components: {
    MissionCard
  },
  data() {
    return {
      missions: [
        { id: 1, title: "開箱指定商品", reward: "NT$1,000"},
        { id: 2, title: "拍攝體驗影片", reward: "NT$2,000" },
        { id: 3, title: "分享社群貼文", reward: "NT$800" },
        { id: 4, title: "分享社群123貼文", reward: "NT$800" }
      ]
    }
  }
}
</script>

<style>
.list {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
</style>

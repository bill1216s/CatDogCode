<template>
  <div class="top" v-if="mission.image">
    <img :src="mission.image" />
    <div class="desc">
      <h3>{{ mission.pagetitle }}</h3>
      <p>{{ mission.desc }}</p>
    </div>
  </div>


  <div class="detail">
    <h2>{{ mission.title }}</h2>
    <br>
    <div class="info">
      <div><span>上線期間</span><span>{{ mission.period }}</span></div>
      <div><span>任務類型</span><span>{{ mission.type }}</span></div>
      <div><span>報酬</span><span>{{ mission.reward }}</span></div>
      <div><span>報名時間</span><span>{{ mission.signup_time }}</span></div>
      <div><span>報名資格</span><span>{{ mission.signup_quali }}</span></div>
    </div>

    <router-link :to="{
      path: '/signup',
      query: { id: mission.id, name: mission.title }
    }">
      <button>我要報名</button>
    </router-link>


  </div>
</template>

<script>

export default {
  data() {
    return {
      mission: {}
    }
  },
  mounted() {
    const id = Number(this.$route.params.id)

    // const mission = list.find(item => item.id === id)
    fetch("/mock/mission.json")
      .then(r => r.json())
      .then(list => {
        const mission = list.find(m => m.id === id)
        if (mission?.image) {
          mission.image = new URL(
            `../assets/image/${mission.image}`,
            import.meta.url
          ).href
        }

        this.mission = mission
      })
  }
}

</script>

<style>
.detail {
  padding: 32px;
}

.top {
  display: flex;
  gap: 16px;
}

img {
  width: 200px;
}
</style>

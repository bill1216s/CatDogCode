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
    <table class="info">
      <tr>
        <th>上線期間</th>
        <td>{{ mission.period }}</td>
      </tr>
      <tr>
        <th>任務類型</th>
        <td>{{ mission.type }}</td>
      </tr>
      <tr>
        <th>報酬</th>
        <td>{{ mission.reward }}</td>
      </tr>
      <tr>
        <th>報名時間</th>
        <td>{{ mission.signup_time }}</td>
      </tr>
      <tr>
        <th>報名資格</th>
        <td>{{ mission.signup_quali }}</td>
      </tr>
    </table>


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

.info {
  width: 100%;
  border-collapse: collapse;
}

.info th {
  text-align: left;
  width: 120px;
  color: #000000;
}

.info td {
  padding: 6px 0;
}
</style>

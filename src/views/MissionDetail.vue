<template>
  <div class="detail">
     <h2>{{ mission.title }}</h2>
     <br>
     <p>上線期間：{{ mission.period }}</p>
     <p>任務類型：{{ mission.type }}</p>
     <p>報酬：{{ mission.reward }}</p>
     <p>報名時間：{{ mission.signup_time }}</p>
     <p>報名資格：{{ mission.signup_quali }}</p>
     <p>任務內容：{{ mission.content }}</p>
     <router-link to="/signup">
      <button>我要報名</button>
      </router-link>

  </div>
</template>

<script>
// import { missions } from '../../public/mock/mission';

// export default {
//   data() {
//     return {
//       mission: {
//         title: "(圖文)Horse發生",
//         period: "2026/01/14 ~ 2026/01/25",
//         type: "開箱任務",
//         reward: "購物金 $500",
//         signup_time: "2026/01/14 ~ 2026/01/25",
//         signup_quali: "粉絲數 3,000 以上",
//         content: "拍攝開箱影片並上傳"
//       }
//     }
//   }
// }
export default {
  data() {
    return {
      mission: {}
    }
  },
 mounted() {
  const id = Number(this.$route.params.id)
    fetch("/mock/mission.json")
    .then(r => r.json())
    .then(list => {
      this.mission = list.find(m => m.id === id)
    })
  }
}
</script>

<style>
.detail {
  padding: 32px;
}
</style>

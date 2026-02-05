<template>
  <router-link :to="`/mission/${id}`" custom v-slot="{ navigate }">
    <div class="card" @click="handleClick(navigate)">

      <h3 class="title">{{ title }}</h3>
      <p class="reward">獎勵：{{ reward }}</p>
      <button class="btn">我要報名</button>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "MissionCard",
  props: {
    id: Number,
    title: String,
    reward: String
  },
  methods: {
    handleClick(navigate) {
      this.$loading.value = true
      setTimeout(() => {
        navigate()
        this.$loading.value = false
      }, 1000)
    }
  }
}
</script>


<style>
.card {
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 16px;
  width: 220px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 16px;
  margin-bottom: 8px;
}

.reward {
  color: #666;
  margin-bottom: 12px;
}

.btn {
  background-color: #007aff;
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
}
</style>

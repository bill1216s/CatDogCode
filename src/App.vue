<template>
  <Header />

  <section v-if="route.path === '/'" class="banner">
    <!-- 背景底圖（固定） -->
    <img :src="bgImage" alt="Background" class="banner-bg" />
    
    <!-- 左邊人物 -->
    <img :src="womenImage" alt="Women" class="banner-person banner-person-left" />
    
    <!-- 右邊人物 -->
    <img :src="menImage" alt="Men" class="banner-person banner-person-right" />
    
    <!-- 文字圖層 -->
    <img :src="titleImage" alt="Title" class="banner-title" />
  </section>

  <Loading v-if="$loading.value" />

  <main v-else class="content">
    <MissionList v-if="route.path === '/'" />
    <router-view v-else />
  </main>

  <footer class="mt-12 py-8 text-center text-sm text-gray-500">
    © 2026 CatDogCode. All rights reserved.
  </footer>
</template>

<script setup>
import { useRoute } from "vue-router"
import Header from "./Header.vue"
import Loading from "./components/Loading.vue"
import MissionList from "./MissionList.vue"

// 导入banner图片
import bgImage from "./assets/image/background.png"
import titleImage from "./assets/image/title.png"
import menImage from "./assets/image/men.png"
import womenImage from "./assets/image/women.png"

const route = useRoute()
</script>

<style>
.content {
  padding: 32px;
}

.logo {
  height: 32px;
}

/* Banner 容器 */
.banner {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
}

/* 背景圖片（固定） */
.banner-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

/* 人物圖片 */
.banner-person {
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  height: 55%;
  width: auto;
  object-fit: contain;
  z-index: 2;
  opacity: 0;
}

/* 左邊人物 - 從左邊 -150px 淡入並滑向中間 */
.banner-person-left {
  left: -150px;
  animation: slideInLeft 0.9s ease-out forwards;
}

/* 右邊人物 - 從右邊 -150px 淡入並滑向中間 */
.banner-person-right {
  right: -150px;
  animation: slideInRight 0.9s ease-out forwards;
}

/* 標題圖片 */
.banner-title {
  position: absolute;
  left: 50%;
  top: 60%;
  width: 525px;
  height: auto;
  transform: translateX(-50%);
  z-index: 3;
  opacity: 0;
  animation: fadeUpTitle 0.8s ease-out 0.4s forwards;
}

/* 動畫 - 左邊人物從左邊淡入並滑到中間 */
@keyframes slideInLeft {
  0% {
    opacity: 0;
    left: -150px;
    transform: translateX(0) translateY(-50%);
  }
  100% {
    opacity: 1;
    left: 53%;
    transform: translateX(-100%) translateY(-50%);
  }
}

/* 動畫 - 右邊人物從右邊淡入並滑到中間 */
@keyframes slideInRight {
  0% {
    opacity: 0;
    right: -150px;
    transform: translateX(0) translateY(-50%);
  }
  100% {
    opacity: 1;
    right: 55%;
    transform: translateX(100%) translateY(-50%);
  }
}

/* 動畫 - 文字向上淡入 */
@keyframes fadeUpTitle {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}
</style>

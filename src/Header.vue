<template>
  <div>
    <header class="header">
      <div class="logo">家樂福</div>
      <nav class="nav">
        <a href="#">創作者福利</a>
        <a href="#">開箱任務牆</a>
        <a href="#">我要報名</a>
      </nav>
    </header>

  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background-color: #ffffff;
  border-bottom: 1px solid #e5e5e5;
}

.logo {
  font-size: 20px;
  font-weight: bold;
}

.nav a {
  margin-left: 16px;
  text-decoration: none;
  color: #333;
}

.nav a:hover {
  color: #007aff;
}

.content {
  padding: 32px;
}
</style>

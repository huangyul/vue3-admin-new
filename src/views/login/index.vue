<script setup lang="ts">
  import TypeIt from '@/components/ReTypeit'
</script>

<template>
  <div class="login-container">
    <div class="login-box">
      <TypeIt :values="['xxxx']" :cursor="false" :speed="150"></TypeIt>
      <el-button>1232</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  width: 100vw;
  height: 100vh;
  .login-box {
    width: 100%;

  }
}
</style>

<script setup lang="ts">
  import TypeIt from '@/components/ReTypeit'
  import { ref } from 'vue'
  import { User, Lock } from '@element-plus/icons-vue'
  import axios from 'axios'

  // 系统标题
  const loginTitle = 'Vue3 Admin'

  const formData = ref({
    username: 'admin',
    password: 'admin',
  })

  const handleLogin = async () => {
    await axios.get('/api/login')

  }
</script>

<template>
  <div class="login-container">
    <div class="login-box">
      <span class="login-title">
        <TypeIt :values="[loginTitle]" :cursor="false" :speed="150"></TypeIt>
      </span>
      <div class="login-item">
        <el-input
          v-model="formData.username"
          placeholder="请输入账号"
          :prefix-icon="User"
        />
      </div>
      <div class="login-item">
        <el-input
          v-model="formData.password"
          placeholder="请输入密码"
          :prefix-icon="Lock"
          type="password"
        />
      </div>
      <div class="login-item">
        <el-button @click="handleLogin">登录</el-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .login-container {
    width: 100vw;
    height: 100vh;
    display: grid;
    .login-box {
      width: fit-content;
      place-self: center;
      text-align: center;
      .login-title {
        font-size: 2.4rem;
        text-transform: uppercase;
        color: #999;
        font: bold 200% Consolas, Monaco, monospace;
      }
      .login-item {
        width: 20rem;
        margin-top: 1rem;
      }
    }
  }
</style>

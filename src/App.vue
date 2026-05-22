<script setup lang="ts">
import { ref } from 'vue'
import PolicySimple from './views/PolicySimple.vue'
import LoginSimple from './views/LoginSimple.vue'

const isLoggedIn = ref(false)
const loginUser = ref('')

function handleLoginSuccess(username: string) {
  isLoggedIn.value = true
  loginUser.value = username
}


</script>

<template>
  <main class="app-page">
    <LoginSimple @login-success="handleLoginSuccess"></LoginSimple>
    <div class="login-status">
      <p>目前登入狀態：{{ isLoggedIn }}</p>
      <p v-if="isLoggedIn">目前登入者:{{ loginUser }}</p>
    </div>
    <PolicySimple v-if="isLoggedIn"></PolicySimple>
  </main>
</template>

<style scoped>
.app-page {
  min-height: 100vh;
  padding: 40px 20px;
  background: #f8fafc;
}

.login-status {
  max-width: 760px;
  margin: 0 auto 28px;
  padding: 12px 16px;
  border-radius: 12px;
  background-color: #eff6ff;
  color: #1e40af;
  font-size: 15px;
}

.login-status p {
  margin: 4px 0;
}
</style>

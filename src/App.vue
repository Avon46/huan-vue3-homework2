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
  <LoginSimple @login-success="handleLoginSuccess"></LoginSimple>
  <p>目前登入狀態：{{ isLoggedIn }}</p>
  <p v-if="isLoggedIn">目前登入者:{{ loginUser }}</p>
  <PolicySimple v-if="isLoggedIn"></PolicySimple>
</template>

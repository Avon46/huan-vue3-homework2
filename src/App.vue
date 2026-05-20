<script setup lang="ts">
import { ref } from 'vue'
import PolicySimple from './views/PolicySimple.vue'
const loading = ref(false)
const username = ref('')
const password = ref('')
const message = ref('')

function login() {
  loading.value = true
  message.value = ''
  if (!username.value || !password.value) {
    message.value = '請輸入帳號密碼'
    loading.value = false
    return
  }
  if (username.value === 'admin' && password.value === '123456') {
    message.value = '登入成功'
  } else {
    message.value = '帳號或密碼錯誤'
  }
  loading.value = false
}
</script>

<template>
  <h2>登入系統</h2>
  <p><input v-model.trim="username" placeholder="帳號"></p>
  <input v-model.trim="password" type="password" placeholder="密碼">
  <p><button @click="login">登入</button></p>
  <p v-if="loading">登入中</p>
  <p v-else-if="message">{{ message }}</p>
  <PolicySimple></PolicySimple>
</template>

<script setup lang="ts">
import BaseSection from '@/components/BaseSection.vue'
import { ref } from 'vue'
const loading = ref(false)
const username = ref('')
const password = ref('')
const message = ref('')
const emit = defineEmits<{
    'login-success': [username: string]
}>()

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
        emit('login-success', username.value)
    } else {
        message.value = '帳號或密碼錯誤'
    }
    loading.value = false
}


</script>

<template>
    <BaseSection>
        <template #title>
            登入系統
        </template>

        <input v-model.trim="username" placeholder="帳號">

        <input v-model.trim="password" type="password" placeholder="密碼">

        <button @click="login">登入</button>

        <p v-if="loading">登入中</p>
        <p v-else-if="message">{{ message }}</p>
    </BaseSection>
</template>

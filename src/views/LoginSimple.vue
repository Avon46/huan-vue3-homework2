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
    <base-section>
        <template #title>
            <h1>登入系統</h1>
        </template>
        <input class="form-input" v-model.trim="username" placeholder="帳號">

        <input class="form-input" v-model.trim="password" type="password" placeholder="密碼">

        <button class="primary-button" @click="login">登入</button>

        <p v-if="loading">登入中</p>
        <p v-else-if="message" class="success-message">{{ message }}</p>
    </base-section>
</template>

<style scoped>
.form-input {
    height: 44px;
    padding: 0 14px;
    border: 1px solid #cbd5e1;
    border-radius: 10px;
    font-size: 15px;
    outline: none;
}

.form-input:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
}

.primary-button {
    height: 44px;
    border: none;
    border-radius: 10px;
    background-color: #2563eb;
    color: white;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
}

.primary-button:hover {
    background-color: #1d4ed8;
}

.success-message {
    margin: 4px 0 0;
    padding: 12px 14px;
    border-radius: 10px;
    background-color: #ecfdf5;
    color: #047857;
    font-weight: 600;
}
</style>

<script setup lang="ts">
import { ref } from 'vue'
import BaseSection from '@/components/BaseSection.vue'

const username = ref('')
const password = ref('')
const loading = ref(false)
const message = ref('')
const isSuccess = ref(false)

const emit = defineEmits<{
    'login-success': [username: string]
}>()

function login() {
    isSuccess.value = false
    loading.value = true
    message.value = ''

    if (!username.value || !password.value) {
        isSuccess.value = false
        message.value = '請輸入帳號密碼'
        loading.value = false
        return
    }

    if (username.value === 'admin' && password.value === '123456') {
        isSuccess.value = true
        message.value = '登入成功'
        emit('login-success', username.value)
    } else {
        message.value = '帳號或密碼錯誤'
        isSuccess.value = false
    }
    loading.value = false
}
</script>

<template>
    <BaseSection>
        <template #title>
            <h1>登入系統</h1>
        </template>

        <input class="form-input" v-model.trim="username" placeholder="帳號" />

        <input class="form-input" v-model.trim="password" type="password" placeholder="密碼" />

        <button class="primary-button" @click="login">
            登入
        </button>

        <p v-if="loading" class="loading-message">登入中</p>
        <p v-else-if="message" :class="isSuccess ? 'success-message' : 'error-message'">
            {{ message }}
        </p>
    </BaseSection>
</template>

<style scoped>
.form-input {
    width: 100%;
    height: 44px;
    padding: 0 14px;
    border: 1px solid #cbd5e1;
    border-radius: 10px;
    font-size: 15px;
    color: #0f172a;
    background-color: #ffffff;
    outline: none;
    box-sizing: border-box;
}

.form-input::placeholder {
    color: #94a3b8;
}

.form-input:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
}

.primary-button {
    width: 100%;
    height: 44px;
    border: none;
    border-radius: 10px;
    background-color: #2563eb;
    color: #ffffff;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.1s ease;
}

.primary-button:hover {
    background-color: #1d4ed8;
}

.primary-button:active {
    transform: scale(0.98);
}

.loading-message {
    margin: 0;
    padding: 12px 14px;
    border-radius: 10px;
    background-color: #eff6ff;
    color: #1d4ed8;
    font-weight: 600;
}

.success-message {
    margin: 0;
    padding: 12px 14px;
    border-radius: 10px;
    background-color: #dcfce7;
    color: #166534;
    font-weight: 600;
}

.error-message {
    margin: 0;
    padding: 12px 14px;
    border-radius: 10px;
    background-color: #fef2f2;
    color: #dc2626;
    font-weight: 600;
}
</style>
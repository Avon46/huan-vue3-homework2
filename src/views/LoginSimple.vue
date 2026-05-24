<script setup lang="ts">
import { ref } from 'vue'
import BaseSection from '@/components/BaseSection.vue'

const username = ref('')
const password = ref('')
const loading = ref(false)
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
            <h1>登入系統</h1>
        </template>

        <input class="form-input" v-model.trim="username" placeholder="帳號" />

        <input class="form-input" v-model.trim="password" type="password" placeholder="密碼" />

        <button class="primary-button" @click="login">
            登入
        </button>

        <p v-if="loading">登入中</p>
        <p v-else-if="message" class="success-message">
            {{ message }}
        </p>
    </BaseSection>
</template>
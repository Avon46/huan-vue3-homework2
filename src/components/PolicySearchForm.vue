<script setup lang="ts">
import { reactive } from 'vue'

const policyForm = reactive({
    policyNo: ''
})
const emit = defineEmits<{
    submit: [policyNo: string]
}>()
function handleSubmit() {
    emit('submit', policyForm.policyNo)
}

</script>

<template>
    <div class="search-form">
        <input v-model.trim='policyForm.policyNo' class="form-input" placeholder="請輸入保單號碼">
        <button @click="handleSubmit" class="primary-button">查詢</button>
    </div>
</template>

<style scoped>
.search-form {
    display: flex;
    gap: 12px;
}

.form-input {
    flex: 1;
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
    width: 96px;
    height: 44px;
    border: none;
    border-radius: 10px;
    background-color: #2563eb;
    color: white;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
}

.primary-button:hover {
    background-color: #1d4ed8;
}
</style>
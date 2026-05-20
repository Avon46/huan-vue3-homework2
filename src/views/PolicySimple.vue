<script setup lang="ts">
import { ref, reactive, watch, computed } from 'vue'
const loading = ref(false)
const policyForm = reactive({
    policyNo: ''
})
const message = ref('')
const result = ref<{
    policyNo: string,
    name: string,
    status: string
} | null>(null)

const normalPolicy = computed(() => policyForm.policyNo.trim().toUpperCase())
watch(
    () => policyForm.policyNo,
    () => {
        message.value = ''
        result.value = null
    }
)

function searchPolicyNo() {
    loading.value = true
    if (!normalPolicy.value) {
        message.value = "請輸入保單號碼"
        loading.value = false
        return
    }
    if (normalPolicy.value === "A123") {
        result.value = {
            policyNo: "A123",
            name: "王曉明",
            status: "審核成功"
        }
    } else {
        message.value = '查無此保單號碼'
    }
    loading.value = false
}
</script>
<template>
    <h2>保單查詢系統</h2>
    <input v-model="policyForm.policyNo" placeholder="保單號碼">
    <button @click="searchPolicyNo">查詢</button>
    <p v-if="loading">查詢中</p>
    <p v-else-if="message">{{ message }}</p>
    <ul v-else-if="result">
        <li>{{ result.policyNo }}</li>
        <li>{{ result.name }}</li>
        <li>{{ result.status }}</li>
    </ul>
</template>
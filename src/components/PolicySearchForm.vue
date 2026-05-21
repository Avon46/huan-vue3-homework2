<script setup lang="ts">
import { reactive } from 'vue'

const policyForm = reactive({
    policyNo: ''
})
const emit = defineEmits<{
    submit: [policyNo: string]
}>()
function handlesubmit() {
    if (!policyForm.policyNo) {
        return
    }
    emit('submit', policyForm.policyNo)
}

</script>

<template>
    <input v-model.trim='policyForm.policyNo' placeholder="請輸入保單號碼">
    <button @click="handlesubmit">查詢</button>
</template>
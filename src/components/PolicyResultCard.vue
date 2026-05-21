<script setup lang="ts">
type Policy = {
    policyNo: string,
    name: string,
    status: string
}
const props = defineProps<{
    loading: boolean
    message: string
    result: Policy | null
}>()
</script>
<template>
    <p v-if="props.loading">查詢中</p>
    <div v-else-if="props.result">
        <p>保單號碼:{{ props.result.policyNo }}</p>
        <p>姓名:{{ props.result.name }}</p>
        <p>狀態:{{ props.result.status }}</p>
    </div>
    <p v-else-if="message">{{ props.message }}</p>
</template>
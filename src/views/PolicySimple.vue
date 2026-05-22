<script setup lang="ts">
import { computed, ref } from 'vue'
import BaseSection from '@/components/BaseSection.vue'
import PolicySearchForm from '@/components/PolicySearchForm.vue'
import PolicyResultCard from '@/components/PolicyResultCard.vue'
const loading = ref(false)
const message = ref('')
const result = ref<{
    policyNo: string,
    name: string,
    status: string
} | null>(null)

const resultProps = computed(() => {
    return {
        loading: loading.value,
        message: message.value,
        result: result.value

    }
})

function searchPolicy(policyNo: string) {
    loading.value = true
    message.value = ''
    result.value = null
    const normalPolicy = policyNo.trim().toUpperCase()
    if (!normalPolicy) {
        message.value = "請輸入保單號碼"
        loading.value = false
        return
    }
    if (normalPolicy === "A123") {
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
    <base-section>
        <template #title>
            <h2>保單查詢系統</h2>
        </template>
        <PolicySearchForm @submit="searchPolicy"></PolicySearchForm>
        <PolicyResultCard v-bind="resultProps" />
    </base-section>
</template>

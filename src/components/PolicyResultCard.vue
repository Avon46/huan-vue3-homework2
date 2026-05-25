<script setup lang="ts">
import type { Policy } from '@/types/PolicyType';
const props = defineProps<{
    loading: boolean
    message: string
    result: Policy | null
}>()
</script>
<template>
    <p v-if="props.loading" class="info-message">查詢中</p>
    <div v-else-if="props.result" class="result-card">
        <div class="result-row">
            <span class="result-label">保單號碼</span>
            <span class="result-value">{{ props.result.policyNo }}</span>
        </div>
        <div class="result-row">
            <span class="result-label">身分證字號</span>
            <span class="result-value">{{ props.result.id }}</span>
        </div>
        <div class="result-row">
            <span class="result-label">要保人</span>
            <span class="result-value">{{ props.result.polictHolder }}</span>
        </div>
        <div class="result-row">
            <span class="result-label">被保人</span>
            <span class="result-value">{{ props.result.insuredPerson }}</span>
        </div>

        <div class="result-row">
            <span class="result-label">手機號碼</span>
            <span class="result-value">{{ props.result.phoneNumber }}</span>
        </div>
        <div class="result-row">
            <span class="result-label">生日</span>
            <span class="result-value">{{ props.result.birth }}</span>
        </div>


    </div>
    <p v-else-if="props.message" class="error-message">{{ props.message }}</p>
</template>

<style scoped>
.result-card {
    padding: 18px;
    border: 1px solid #e5e7eb;
    border-radius: 14px;
    background-color: #f9fafb;
}

.result-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #e5e7eb;
}

.result-row:last-child {
    border-bottom: none;
}

.result-label {
    color: #6b7280;
    font-size: 14px;
}

.result-value {
    color: #111827;
    font-size: 15px;
    font-weight: 600;
}

.status-badge {
    padding: 4px 10px;
    border-radius: 999px;
    background-color: #dcfce7;
    color: #166534;
    font-size: 14px;
    font-weight: 600;
}

.info-message {
    margin: 0;
    padding: 12px 14px;
    border-radius: 10px;
    background-color: #eff6ff;
    color: #1d4ed8;
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
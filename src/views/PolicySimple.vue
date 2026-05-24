<script setup lang="ts">
import BaseSection from '@/components/BaseSection.vue'
import PolicySearchForm from '@/components/PolicySearchForm.vue'
import PolicyResultCard from '@/components/PolicyResultCard.vue'
import { useProductSearch } from '@/composable/usePolicySearch.ts'
const { resultProps, searchPolicy } = useProductSearch()
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

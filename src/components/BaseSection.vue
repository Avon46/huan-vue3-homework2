<template>
    <section class="base-section">
        <div class="base-section__title">
            <slot name="title"></slot>
        </div>

        <div class="base-section__content">
            <slot></slot>
        </div>
    </section>
</template>

<style scoped>
.base-section {
    border: 1px solid #ddd;
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 20px;
    background-color: #fff;
}

.base-section__title {
    margin-bottom: 16px;
    font-size: 20px;
    font-weight: bold;
}

.base-section__content {
    display: flex;
    flex-direction: column;
    gap: 12px;
}
</style>
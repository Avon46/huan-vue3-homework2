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
    width: 100%;
    max-width: 760px;
    margin: 0 auto 28px;
    padding: 32px 40px;
    border: 1px solid #e5e7eb;
    border-radius: 18px;
    background-color: #ffffff;
    box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
}

.base-section__title {
    margin-bottom: 24px;
}

.base-section__title :deep(h1),
.base-section__title :deep(h2) {
    margin: 0;
    font-size: 30px;
    font-weight: 700;
    color: #0f172a;
}

.base-section__content {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
</style>
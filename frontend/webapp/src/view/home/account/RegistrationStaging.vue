<template>
    <div class="registration-staging">
        <div class="staging-box">
            Please check your email.
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "@/style/common";

.registration-staging {
    @include common.fullsize;

    display: grid;
    place-content: center;

    .staging-box {
        color: var(--text);
        font-family: common.$font-title;
        border: 1px solid var(--text);
        padding: 3em;
    }
}
</style>
<template>
    <button>
        <slot></slot>
    </button>
</template>

<style scoped lang="scss">
@use "@/style/common";

button {
    @include common.button;
}
</style>
<template>
    <button :data-style="props.visualPlacement || 'background'">
        <slot></slot>
    </button>
</template>

<script lang="ts" setup>
const props = defineProps<{
    visualPlacement?: 'foreground' | 'background',
}>();
</script>

<style lang="scss" scoped>
@use "@/style/common";

button {
    @include common.size(7em, 2.5em);
    font: 400 15px common.$font-title;
    color: var(--text);
    cursor: pointer;
    border-radius: 1em;

    &[data-style="background"] {
        border: 1px solid var(--text);
        background: var(--bg);
    }

    &[data-style="foreground"] {
        border: none;
        background: var(--primary);
    }
}
</style>
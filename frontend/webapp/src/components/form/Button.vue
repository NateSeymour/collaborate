<template>
    <button
        @click="onClick"
        :data-style="props.visualPlacement || 'background'"
        :data-state="action?.status.value">

        <div v-if="action && action.status.value !== 'idle'" class="status-indicator">
            <svg class="icon loading" viewBox="100 100 100 100">

            </svg>
        </div>

        <div class="button-content">
            <slot></slot>
        </div>
    </button>
</template>

<script lang="ts" setup>
const props = defineProps<{
    // Visual
    visualPlacement?: 'foreground' | 'background',

    // Actions
    action?: any,
    body?: any,
    bodyResolver?: () => any;
}>();

function onClick() {
    if(props.action) {
        const body = props.bodyResolver?.() || props.body;

        props.action?.mutate(body);
    }
}
</script>

<style lang="scss" scoped>
@use "@/style/common";

button {
    @include common.size(7em, 2.5em);
    font: 400 15px common.$font-title;
    color: var(--text);
    cursor: pointer;
    border-radius: 1em;
    display: flex;
    flex-direction: row;

    &[data-style="background"] {
        border: 1px solid var(--text);
        background: var(--bg);
    }

    &[data-style="foreground"] {
        border: none;
        background: var(--primary);
    }

    .status-indicator {
        height: 100%;

        svg {
            height: 100%;
        }
    }

    .button-content {
        @include common.fullsize;
        @include common.centered-content;
    }
}
</style>
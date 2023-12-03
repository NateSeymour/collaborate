<template>
    <button
        @click="onClick"
        :data-style="props.visualPlacement || 'background'"
        :data-state="action?.status.value">

        <div class="button-content">
            <StatusIndicator v-if="action" :status="action?.status.value" />
            <slot></slot>
        </div>
    </button>
</template>

<script lang="ts" setup>
import StatusIndicator from "@/components/ui/StatusIndicator.vue";
import {useRouter} from "vue-router";

const router = useRouter();

const props = defineProps<{
    visualPlacement?: 'foreground' | 'background',
    action?: any,
    to?: string,
}>();

function onClick() {
    if(props.action) {
        props.action?.mutate();
    } else if(props.to) {
        router.push(props.to);
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

    &[data-style="background"] {
        border: 1px solid var(--text);
        background: var(--bg);
    }

    &[data-style="foreground"] {
        border: none;
        background: var(--primary);
    }

    .button-content {
        @include common.fullsize;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
}
</style>
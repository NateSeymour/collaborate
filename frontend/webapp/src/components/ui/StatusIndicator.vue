<template>
    <div class="status-indicator" :data-status="status">
        <svg v-if="status === 'loading'" class="icon loading" viewBox="0 0 100 100">
            <circle r="20" cx="50" cy="50" fill="none" stroke-width="5px" stroke="white"/>
        </svg>
        <svg v-if="status === 'success'" class="icon success" viewBox="0 0 100 100">
            <circle r="1" cx="50" cy="50" fill="none" stroke-width="5px" stroke="white"/>
        </svg>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    status: 'idle' | 'loading' | 'error' | 'success',
}>();
</script>

<style lang="scss" scoped>
@use "@/style/common";

.status-indicator {
    @include common.size(auto, 100%);

    svg {
        @include common.fullsize;
    }

    .loading {
        circle {

        }
    }

    &[data-status='idle'] {
        width: 0;
    }
}
</style>
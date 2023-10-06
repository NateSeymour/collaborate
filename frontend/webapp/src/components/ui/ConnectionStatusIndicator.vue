<template>
    <div :data-state="state" class="connection-status-indicator">
        {{ displayState }}
    </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { RoomState, useRoomEventCallback } from '../../net/realtime';

const state = ref<RoomState>('closed');
const displayState = computed(() => {
    return {
        closed: 'Connection Lost',
        open: 'Connected',
        connecting: 'Connecting...',
    }[state.value];
});

useRoomEventCallback('state', (newState: RoomState) => {
    state.value = newState;
});
</script>

<style lang="scss" scoped>
.connection-status-indicator {
    color: white;
}
</style>
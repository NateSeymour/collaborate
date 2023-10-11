<template>
    <div :data-state="state" class="connection-status-indicator">
        {{ displayState }}
    </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import { RoomState, useRoomEventCallback, useRoom } from '@/net/realtime';

const state = ref<RoomState>('closed');
const displayState = computed(() => {
    return {
        closed: 'Connection Lost',
        open: 'Connected',
        connecting: 'Connecting...',
    }[state.value];
});

const room = useRoom();

useRoomEventCallback('state', (newState: RoomState) => {
    state.value = newState;
});

onMounted(() => {
    switch(room.ws?.readyState) {
    case WebSocket.OPEN:
        state.value = 'open';
        break;
    case WebSocket.CLOSED:
        state.value = 'closed';
        break;
    case WebSocket.CONNECTING:
        state.value = 'connecting';
        break;
    }
});
</script>

<style lang="scss" scoped>
@use "@/style/common";

.connection-status-indicator {
    color: white;
    font-family: common.$font-title;
    padding: 0.5em 1em 0.5em 1em;
    background: common.$highlight-color;
    transition: 2s ease-in;

    &[data-state="open"] {
        opacity: 0;
    }
}
</style>
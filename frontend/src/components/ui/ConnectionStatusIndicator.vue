<template>
    <span>
        {{ room?.state || 'Connecting...' }}
    </span>
</template>

<script lang="ts" setup>
import { useRoom } from '@/net/realtime';

const room = useRoom();
</script>

<style lang="scss" scoped>
span {
    color: white;
}
</style>
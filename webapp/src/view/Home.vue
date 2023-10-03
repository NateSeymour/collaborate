<template>
    <div class="home">
        <button @click="() => mutate()">Create Room</button>
    </div>
</template>

<script lang="ts" setup>
import { useMutation } from '@tanstack/vue-query';
import { config } from '../config';
import { useRouter } from 'vue-router';

const router = useRouter();

const { mutate } = useMutation({
    mutationFn: async () => {
        const res = await fetch(`${config.api.broker}/CreateRoom`, { method: 'POST' });
        return await res.json();
    },
    onSettled: (data) => {
        router.push(`/room/${data.roomId}`);
    },
});
</script>
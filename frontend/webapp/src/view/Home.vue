<template>
    <div class="home">
        <Button @click="createRoom.mutate">Create Room</Button>
    </div>
</template>

<script lang="ts" setup>
import { useMutation } from '@tanstack/vue-query';
import { config } from '@/config';
import { useRouter } from 'vue-router';
import Button from '@/components/ui/Button.vue';

const router = useRouter();

const createRoom = useMutation({
    mutationFn: async () => {
        const res = await fetch(`${config.api.broker}/CreateRoom`, { method: 'POST' });
        return await res.json();
    },
    onSettled: (data) => {
        router.push(`/room/${data.id}`);
    },
});
</script>

<style scoped lang="scss">
.home {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
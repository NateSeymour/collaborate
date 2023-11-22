<template>
    <div class="verify-email">

    </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {buildMutation} from "@/api/api";

const router = useRouter();
const route = useRoute();

const verifyEmail = buildMutation<{token: string}>('/auth/VerifyEmail', {
    cacheKey: ['auth', 'user'],
    onSuccess: () => {
        router.push('/Welcome');
    },
});

onMounted(() => {
    verifyEmail.mutate({
        token: route.params.token as string
    });
});
</script>

<style lang="scss" scoped>
</style>
<template>
    <div class="home">
        <RouterLink to="/CreateRoom">Create Room</RouterLink>
    </div>
</template>

<script lang="ts" setup>
import { useRouter, RouterLink } from 'vue-router';

const router = useRouter();
</script>

<style scoped lang="scss">
@use "@/style/common";

.home {
    @include common.fullsize;

    display: flex;
    align-items: center;
    justify-content: center;

    a {
        @include common.button;
    }
}
</style>
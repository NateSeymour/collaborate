<template>
    <header class="application-header">
        <div class="title">
            <router-link to="/Welcome">Swifteams</router-link>
        </div>

        <div v-if="user.data.value" class="user">
            {{ user.data.value.email }}

            <Button :action="logout">Logout</Button>
        </div>
        <div v-else class="actions">
            <Button @click="router.push('/Login')" visual-placement="background">Login</Button>
            <Button @click="router.push('/Register')" visual-placement="foreground">Register</Button>
        </div>
    </header>
</template>

<script setup lang="ts">
import Button from '@/components/form/Button.vue';
import { useRouter } from 'vue-router';
import {buildMutation, useApiQuery} from "@/api/api";
import { User } from 'pb/Swifteams.ts';

const router = useRouter();

const user = useApiQuery<User>('/auth/User', {
    queryKey: ['auth', 'user'],
});

const logout = buildMutation<void, void>('/auth/Logout', {
    cacheKey: ['auth', 'user']
});
</script>

<style scoped lang="scss">
@use "@/style/common";

header {
    @include common.size(100%, 3em);
    padding: 2em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .title {
        a {
            color: var(--text);
            font: 600 30px common.$font-title;
            text-decoration: none;
        }
    }

    .user {
        color: var(--text);
        font: 400 14px common.$font-title;
    }

    .actions {
        display: grid;
        grid-column-gap: 1em;
        grid-template-columns: 1fr 1fr;
    }
}
</style>

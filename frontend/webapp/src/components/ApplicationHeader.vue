<template>
    <header>
        <div class="title">
            <router-link to="/">Swifteams</router-link>
        </div>
        <div class="actions"></div>
        <div class="user">
            <div v-if="userStore.loggedIn" class="user-info">
                <span>{{ userStore.user.username }}</span>
            </div>
            <div v-else class="login-box">
                Login
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user';

const userStore = useUserStore();
</script>

<style scoped lang="scss">
@use "@/style/common";

header {
    width: 100%;
    height: 3em;
    padding: 2em;
    background: common.$highlight-color;
    display: flex;
    flex-direction: row;
    align-items: center;

    .title {
        a {
            color: white;
            font-size: 30px;
            font-family: common.$font-title;
            font-weight: 600;
            text-decoration: none;
        }
    }

    .actions {
        flex-grow: 1000;
    }

    .user {
        font-family: common.$font-title;
        color: white;
    }
}
</style>

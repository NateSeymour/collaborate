<template>
    <div class="home">
        <div class="home-content">
            <ApplicationHeader />

            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts" setup>
import ApplicationHeader from "@/components/ApplicationHeader.vue";
</script>

<style lang="scss" scoped>
@use "@/style/common";

.home {
    @include common.fullsize;

    display: flex;
    flex-direction: column;
    align-items: center;

    .home-content {
        @include common.size(75%, 100%);
    }
}
</style>
<template>
    <ApplicationHeader />
    <div id="content">
        <RouterView />
    </div>
    <footer>

    </footer>
</template>

<script lang="ts" setup>
import ApplicationHeader from '@/components/ApplicationHeader.vue';
</script>

<style lang="scss" scoped>
#content {
    width: 100%;
    height: 100%;
}
</style>

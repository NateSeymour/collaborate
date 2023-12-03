<template>
    <div class="plugin-manager">
        {{ plugins.data }}
    </div>
</template>

<script lang="ts" setup>
import {useApiQuery} from "@/api/api";

const plugins = useApiQuery('/debug/DevelopmentPlugins', {
    queryKey: ['debug', 'DevelopmentPlugins'],
    staleTime: 100,
});
</script>

<style lang="scss" scoped>
@use "@/style/common";

.plugin-manager {
    @include common.fullsize;
}
</style>
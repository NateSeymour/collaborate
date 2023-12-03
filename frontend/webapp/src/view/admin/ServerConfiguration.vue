<template>
    <div class="server-configuration">
        <table v-if="config.data.value">
            <tr v-for="[key, value] of Object.entries(config.data.value)">
                <td>{{ key }}</td>
                <td>{{ value }}</td>
            </tr>
        </table>
    </div>
</template>

<script lang="ts" setup>
import {useApiQuery} from "@/api/api.ts";

const config = useApiQuery('/debug/ServerConfig', {
    queryKey: ['debug', 'ServerConfig']
});
</script>

<style lang="scss" scoped>
@use "@/style/common";

.server-configuration {
    padding: 1em;

    table {
        @include common.fullsize;
        font: 400 14px common.$font-title;
        color: var(--text);
        background: var(--bg-highlight);

        tr {
            td {
                padding: 0.3em;

                &:first-child {
                    font-weight: 600;
                }
            }
        }
    }
}
</style>
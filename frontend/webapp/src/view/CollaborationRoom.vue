<template>
    <div class="collaboration-room">
        <div class="navigation">
            <nav>
                <RouterLink :to="`/room/${route.params.id}/talk`">
                    <img src="../assets/icons/talk-48.png" alt="Talk Together">
                </RouterLink>
                <RouterLink :to="`/room/${route.params.id}/chat`">
                    <img src="../assets/icons/chat-48.png" alt="Chat Together">
                </RouterLink>
                <RouterLink :to="`/room/${route.params.id}/draw`">
                    <img src="../assets/icons/paint-48.png" alt="Draw Together">
                </RouterLink>
                <RouterLink :to="`/room/${route.params.id}/write`">
                    <img src="../assets/icons/write-48.png" alt="Write Together">
                </RouterLink>
                <RouterLink :to="`/room/${route.params.id}/design`">
                    <img src="../assets/icons/design-48.png" alt="Design Together">
                </RouterLink>
            </nav>
        </div>
        <div ref="playground" class="playground">
            <RouterView />
        </div>
        <div class="status">
            <ConnectionStatusIndicator />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { useRoom } from '@/net/realtime';

import ConnectionStatusIndicator from '@/components/ui/ConnectionStatusIndicator.vue';

const route = useRoute();
const room = useRoom();

const playground = ref<HTMLDivElement>();
</script>

<style lang="scss" scoped>
@use "@/style/common";

.collaboration-room {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    position: relative;

    .navigation {
        nav {
            display: flex;
            flex-direction: column;

            a {
                padding: 1em;
                transition: 200ms;

                &:hover {
                    background: grey;
                }

                &.router-link-active {
                    background: common.$accent-color;
                }
            }
        }
    }

    .playground {
        width: 100%;
        height: 100%;
        position: relative;

        .cursor-layer {
            position: absolute;
            width: 100%;
            height: 100%;

            .cursor {
                .cursor-body {
                    fill: red !important;
                }
            }
        }
    }

    .status {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: end;
        justify-content: end;
        pointer-events: none;
    }
}
</style>
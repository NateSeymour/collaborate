<template>
    <div class="collaboration-room">
        <div class="navigation">
            <nav>
                <RouterLink :to="`/room/${route.params.roomId}/talk`">
                    <img src="@/assets/icons/talk-48.png" alt="Talk Together">
                </RouterLink>
                <RouterLink :to="`/room/${route.params.roomId}/chat`">
                    <img src="@/assets/icons/chat-48.png" alt="Chat Together">
                </RouterLink>
                <RouterLink :to="`/room/${route.params.roomId}/paint`">
                    <img src="@/assets/icons/paint-48.png" alt="Paint Together">
                </RouterLink>
                <RouterLink :to="`/room/${route.params.roomId}/write`">
                    <img src="@/assets/icons/write-48.png" alt="Write Together">
                </RouterLink>
                <RouterLink :to="`/room/${route.params.roomId}/design`">
                    <img src="@/assets/icons/design-48.png" alt="Design Together">
                </RouterLink>
            </nav>
        </div>
        <div ref="playground" @mousemove="mouseMove" class="playground">
            <RouterView />
        </div>
        <div class="status">
            <ConnectionStatusIndicator />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRoute, RouterLink } from 'vue-router';

import ConnectionStatusIndicator from '@/components/ui/ConnectionStatusIndicator.vue';

const route = useRoute();

const playground = ref<HTMLDivElement>();

function mouseMove(e: MouseEvent) {
    console.log(`(${e.offsetX}, ${e.offsetY})`);
    //room.value.send(`(${e.offsetX}, ${e.offsetY})`);
}
</script>

<style lang="scss" scoped>
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
                    background: gray;
                }

                &.router-link-active {
                    background: blue;
                }
            }
        }
    }

    .playground {
        width: 100%;
        height: 100%;
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
<template>
    <div class="collaboration-room">
        <div class="navigation">
            <nav>
                <RouterLink :to="`/room/${route.params.roomId}/talk`">
                    <img src="../assets/icons/talk-48.png" alt="Talk Together">
                </RouterLink>
                <RouterLink :to="`/room/${route.params.roomId}/chat`">
                    <img src="../assets/icons/chat-48.png" alt="Chat Together">
                </RouterLink>
                <RouterLink :to="`/room/${route.params.roomId}/paint`">
                    <img src="../assets/icons/paint-48.png" alt="Paint Together">
                </RouterLink>
                <RouterLink :to="`/room/${route.params.roomId}/write`">
                    <img src="../assets/icons/write-48.png" alt="Write Together">
                </RouterLink>
                <RouterLink :to="`/room/${route.params.roomId}/design`">
                    <img src="../assets/icons/design-48.png" alt="Design Together">
                </RouterLink>
            </nav>
        </div>
        <div ref="playground" @mousemove="mouseMove" class="playground">
            <RouterView />
            <div class="cursor-layer">
                <MouseCursor class="cursor" color="black" outline="red" :style="`transform: translate(${x}px, ${y}px);`" />
            </div>
        </div>
        <div class="status">
            <ConnectionStatusIndicator />
        </div>
    </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import {RouterLink, useRoute} from 'vue-router';
import {useRoom, useRoomEventCallback} from '@/net/realtime';
import {ClientMessageType, ServerBroadcast} from 'proto'

import ConnectionStatusIndicator from '@/components/ui/ConnectionStatusIndicator.vue';
import MouseCursor from "@/components/ui/MouseCursor.vue";

const route = useRoute();
const room = useRoom();

const x = ref(0);
const y = ref(0);

useRoomEventCallback('broadcast', (broadcast: ServerBroadcast) => {
    switch(broadcast.message?.type) {
        case ClientMessageType.CLIENT_MESSAGE_MOUSEPOS:
            x.value = broadcast.message.mousepos!.x;
            y.value = broadcast.message.mousepos!.y;
    }
});

const playground = ref<HTMLDivElement>();

function mouseMove(e: MouseEvent) {
    room.send({
        type: ClientMessageType.CLIENT_MESSAGE_MOUSEPOS,
        mousepos: {
            x: e.offsetX,
            y: e.offsetY,
        }
    });
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
                    background: grey;
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
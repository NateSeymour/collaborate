<template>
    <div class="cards">
        <div class="hook">
            <div class="showcase">
                <div class="placeholder"></div>
            </div>
            <div class="call-to-action">
                <h1>Your Team Needs a Workspace</h1>

                <div class="actions">
                    <Button to="/CreateRoom">Custom Room</Button>
                    <Button :action="startCollaborating" visual-placement="foreground">Start Collaborating</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import Button from '@/components/form/Button.vue';
import {buildMutation} from "@/api/api";
import {CreateRoomRequest, CreateRoomResponse} from "@/api/broker";

const router = useRouter();

const startCollaborating = buildMutation<CreateRoomRequest, CreateRoomResponse>('/broker/CreateRoom', {
    body: {
        name: 'New Room',
        marketplacePlugins: [],
        developmentPlugins: ['@official/chat'],
    },
    onSuccess: (room) => {
        console.log(room);
    },
});
</script>

<style scoped lang="scss">
@use "@/style/common";
.cards {
    @include common.fullsize;

    margin-top: 5em;
    display: grid;

    .hook {
        @include common.size(100, 20em);
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 1em;

        .showcase {
            @include common.fullsize;
            @include common.centered-content;

            .placeholder {
                @include common.size(80%, 80%);

                background: var(--bg-highlight);
            }
        }

        .call-to-action {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            h1 {
                font: 600 30px common.$font-title;
                text-align: center;
                margin-bottom: 1em;
            }

            .actions {
                width: 100%;
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-column-gap: 1em;

                button {
                    @include common.size(12em, 3em);
                }
            }
        }
    }
}
</style>
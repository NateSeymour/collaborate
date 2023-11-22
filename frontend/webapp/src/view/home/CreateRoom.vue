<template>
    <div class="create-room">
        <div class="templates">
            <div @click="selectedTemplate = template" class="template" v-for="template in config.roomTemplates" :data-selected="template.name === selectedTemplate?.name">
                <h3>{{ template.name }}</h3>
                <p>{{ template.short }}</p>
            </div>
        </div>
        <div class="configuration">
            <div class="options">
                <Form :data="{
                    sections: [
                        {
                            title: 'Basic Information',
                            inputs: [
                                {
                                    name: 'roomName',
                                    title: 'Name',
                                    type: 'text',
                                },
                            ],
                        },
                    ],
                }" />
            </div>
            <div class="controls">
                <Button @click="createRoom.mutate">Create Room</Button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from '@/components/form/Button.vue';
import { useMutation } from '@tanstack/vue-query';
import { config } from '@/config';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import Form from '@/components/form/Form.vue';

const router = useRouter();

const selectedTemplate = ref(null);

const createRoom = useMutation({
    mutationFn: async () => {
        const res = await fetch(`${config.api.broker}/CreateRoom`, { method: 'POST' });
        return await res.json();
    },
    onSettled: (data) => {
        router.push(`/room/${data.id}`);
    },
});
</script>

<style lang="scss" scoped>
@use "@/style/common";

.create-room {
    @include common.fullsize;
    display: flex;
    flex-direction: row;

    .templates {
        @include common.size(20em, 100%);

        .template {
            @include common.hover-highlight;

            width: 100%;
            padding: 1em;
            color: white;
            font-family: common.$font-title;
        }
    }

    .configuration {
        @include common.fullsize;

        display: flex;
        flex-direction: column;

        .options {
            @include common.fullsize;
        }

        .controls {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            background-color: common.$highlight-color;
        }
    }
}
</style>

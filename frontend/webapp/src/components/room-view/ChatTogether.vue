<template>
    <div class="chat-together">
        <div class="message-area">
            <div class="info-box">
                Chat here with your friends!
            </div>
            <div class="messages">
                <div class="message" v-for="message in chatStore.messages">
                    {{ message.message }}
                </div>
            </div>
        </div>
        <div class="chat-box-container">
            <div class="chat-box">
                <input class="chat-content" type="text">
                <Button class="send-btn">Send</Button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Button from '@/components/ui/Button.vue';
import { useChatStore } from '@/store/chat';

const chatStore = useChatStore();
</script>

<style lang="scss" scoped>
@use "@/style/common";

.chat-together {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .message-area {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .info-box {
            color: yellow;
            background: common.$highlight-color;
            padding: 0.5em 2em 0.5em 2em;
            margin: 0.5em;
            text-align: center;
            border-radius: 0.5em;
            font-family: common.$font-title;
        }
    }

    .chat-box-container {
        display: flex;
        justify-content: center;

        .chat-box {
            display: flex;
            flex-direction: row;
            width: 80%;

            .chat-content, .send-btn {
                font-size: 18px;
                height: 3em;
            }

            .chat-content {
                width: 100%;
            }

            .send-btn {
                width: 4em;
            }
        }
    }
}
</style>
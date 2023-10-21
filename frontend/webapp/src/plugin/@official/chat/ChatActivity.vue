<template>
    <div class="chat-together">
        <div class="message-area">
            <div class="info-box">
                Chat here with your friends!
            </div>
            <div class="messages">
            </div>

            <div id="anchor"></div>
        </div>
        <div class="chat-box-container">
            <div class="chat-box">
                <input ref="chatBox" @keypress.enter="sendMessage" class="chat-content" type="text">
                <Button @click="sendMessage" class="send-btn">Send</Button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Button from '@/components/ui/Button.vue';
import { ref } from 'vue';
import { useRoom } from '@/net/realtime';

const room = useRoom();
const chatBox = ref();

function sendMessage() {
}
</script>

<style lang="scss" scoped>
@use "@/style/common";

.chat-together {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .message-area * {
        overflow-anchor: none;
    }

    .message-area {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-y: scroll;

        .info-box {
            color: yellow;
            background: common.$highlight-color;
            padding: 0.5em 2em 0.5em 2em;
            margin: 0.5em;
            text-align: center;
            border-radius: 0.5em;
            font-family: common.$font-title;
        }

        .messages {
            width: 100%;
            height: 100%;
            padding: 1em;
            display: flex;
            flex-direction: column;

            .message {
                width: 100%;

                .chat-bubble {
                    max-width: 80%;
                    background: green;
                    color: white;
                    float: left;
                    padding: 0.5em;
                    border-radius: 0.5em;
                    margin-bottom: 1em;
                    font-family: common.$font-title;

                    &[data-origin="_self"] {
                        background: common.$accent-color;
                        float: right;
                    }
                }
            }
        }

        #anchor {
            overflow-anchor: auto;
            min-height: 3em;
            display: block;
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
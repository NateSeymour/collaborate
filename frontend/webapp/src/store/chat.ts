import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useRoomEventCallback } from '@/net/realtime.ts';
import { ClientChatMessage, ClientMessage } from 'pb/Client.ts';

export const useChatStore = defineStore('chat', () => {
    const messages = ref<ClientChatMessage[]>([]);

    useRoomEventCallback('client:ChatMessage', (data: ClientMessage) => {
        messages.value.push(data.chatMessage!);
    });

    return { messages };
});
import { Plugin } from 'src/plugin';
import ChatActivity from '@/plugin/chat/ChatActivity.vue';

export const pluginConfiguration = {
    name: '@builtin/chat',
};

export const activity = ChatActivity;

export const plugin = new Plugin(ChatActivity, () => {
    return {};
});
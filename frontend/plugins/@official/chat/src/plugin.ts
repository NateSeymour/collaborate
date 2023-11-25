import Chat from '@/activities/Chat.vue';
import manifest from '@public/manifest.json';

interface Message {
    content: string,
}

export const plugin = {
    manifest,
    activities: [
        {
            name: 'chat',
            component: Chat,
        },
    ],
    handlers: {
        'message': (message: Message) => {
            console.log(message);
        },
    },
};
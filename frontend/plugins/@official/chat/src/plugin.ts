import Chat from '@/activities/Chat.vue';
import manifest from '@public/manifest.json';

export const plugin = {
    manifest,
    activities: [
        {
            name: 'chat',
            component: Chat,
        },
    ],
    handlers: {
        'message': (message: string) => {
            console.log(message);
        },
    },
};
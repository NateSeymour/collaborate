import Chat from './activities/Chat.vue';

interface Message {
    content: string,
}

export const plugin = {
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
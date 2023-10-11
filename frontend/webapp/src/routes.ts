import CollaborationRoom from '@/view/CollaborationRoom.vue';
import Home from '@/view/Home.vue';

import TalkTogether from '@/components/TalkTogether.vue';
import DesignTogether from '@/components/DesignTogether.vue';
import ChatTogether from '@/components/ChatTogether.vue';
import WriteTogether from '@/components/WriteTogether.vue';
import DrawTogether from "@/components/DrawTogether.vue";

export const routes = [
    { path: '/', component: Home },
    { 
        path: '/network-room/:roomId',
        component: CollaborationRoom,
        meta: {
            requiresRoomConnection: true,
        },
        children: [
            {
                path: 'draw',
                component: DrawTogether,
            },
            {
                path: 'talk',
                component: TalkTogether,
            },
            {
                path: 'design',
                component: DesignTogether,
            },
            {
                path: 'chat',
                component: ChatTogether,
            },
            {
                path: 'write',
                component: WriteTogether,
            },
        ],
    },
];
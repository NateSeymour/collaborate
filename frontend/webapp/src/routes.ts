import CollaborationRoom from '@/view/CollaborationRoom.vue';
import Home from '@/view/Home.vue';

import TalkTogether from '@/components/room-view/TalkTogether.vue';
import DesignTogether from '@/components/room-view/DesignTogether.vue';
import ChatTogether from '@/components/room-view/ChatTogether.vue';
import WriteTogether from '@/components/room-view/WriteTogether.vue';
import DrawTogether from '@/components/room-view/DrawTogether.vue';

export const routes = [
    { path: '/', component: Home },
    { 
        path: '/room/:id',
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
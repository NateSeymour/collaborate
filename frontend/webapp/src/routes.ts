import CollaborationRoom from '@/view/CollaborationRoom.vue';
import Home from '@/view/Home.vue';

import PaintTogether from '@/components/PaintTogether.vue';
import TalkTogether from '@/components/TalkTogether.vue';
import DesignTogether from '@/components/DesignTogether.vue';
import ChatTogether from '@/components/ChatTogether.vue';
import WriteTogether from '@/components/WriteTogether.vue';

export const routes = [
    { path: '/', component: Home },
    { 
        path: '/room/:roomId', 
        component: CollaborationRoom,
        meta: {
            requiresRoomConnection: true,
        },
        children: [
            {
                path: 'paint',
                component: PaintTogether,
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
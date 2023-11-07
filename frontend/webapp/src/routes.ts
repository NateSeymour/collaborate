import Home from '@/view/Home.vue';
import CreateRoom from '@/view/CreateRoom.vue';
import CollaborationRoom from '@/view/CollaborationRoom.vue';
import Register from "@/view/account/Register.vue";

export const routes = [
    { path: '/', component: Home },
    { path: '/CreateRoom', component: CreateRoom },
    { 
        path: '/Room/:id/:activity',
        component: CollaborationRoom,
        meta: {
            requiresRoomConnection: true,
        },
    },
    {
        path: '/Register',
        component: Register,
    },
];
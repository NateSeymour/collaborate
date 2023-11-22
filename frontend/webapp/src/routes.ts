import Home from '@/view/home/Home.vue';
import CreateRoom from '@/view/home/CreateRoom.vue';
import CollaborationRoom from '@/view/CollaborationRoom.vue';
import Register from '@/view/home/account/Register.vue';
import VerifyEmail from '@/view/home/account/VerifyEmail.vue';
import RegistrationStaging from '@/view/home/account/RegistrationStaging.vue';
import Landing from "@/view/home/Landing.vue";

export const routes = [
    {
        path: '/',
        component: Home,
        children: [
            {
                path: '/Welcome',
                component: Landing,
            },
            {
                path: '/Register',
                component: Register,
            },
            {
                path: '/RegistrationStaging',
                component: RegistrationStaging,
            },
            {
                path: '/VerifyEmail/:token',
                component: VerifyEmail,
            },
            {
                path: '/CreateRoom',
                component: CreateRoom,
            },
        ],
    },
    {
        path: '/Room/:id/:activity',
        component: CollaborationRoom,
        meta: {
            requiresRoomConnection: true,
        },
    },
];
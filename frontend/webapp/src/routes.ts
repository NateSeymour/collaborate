import Home from '@/view/home/Home.vue';
import CreateRoom from '@/view/home/CreateRoom.vue';
import CollaborationRoom from '@/view/CollaborationRoom.vue';
import LoginRegister from '@/view/home/account/LoginRegister.vue';
import VerifyEmail from '@/view/home/account/VerifyEmail.vue';
import RegistrationStaging from '@/view/home/account/RegistrationStaging.vue';
import Landing from "@/view/home/Landing.vue";
import Admin from "@/view/admin/Admin.vue";
import PluginManager from "@/view/admin/PluginManager.vue";
import ServerConfiguration from "@/view/admin/ServerConfiguration.vue";

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
                component: LoginRegister,
                props: {
                    action: 'register',
                },
            },
            {
                path: '/Login',
                component: LoginRegister,
                props: {
                    action: 'login',
                },
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
        path: '/Admin',
        component: Admin,
        meta: {
            privilege: 'superuser',
        },
        children: [
            {
                path: '/Admin/Plugins',
                component: PluginManager,
            },
            {
                path: '/Admin/ServerConfiguration',
                component: ServerConfiguration,
            },
        ],
    },
    {
        path: '/Room/:id/:activity',
        component: CollaborationRoom,
        meta: {
            requiresRoomConnection: true,
            privilege: 'standard',
        },
    },
];
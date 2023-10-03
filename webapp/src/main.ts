import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';
import { VueQueryPlugin } from '@tanstack/vue-query';
import {RealtimePlugin, useRoom} from "@/net/realtime.ts";

import { routes } from '@/routes.ts';

import App from '@/App.vue';

import '@/style/global.scss';

console.log(process.env.NODE_ENV);

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, _) => {
    const room = useRoom();

    if(!to.meta.requiresRoomConnection) {
        room.disconnect();
    } else {
        room.connect(to.params.roomId as string);
    }
});

const pinia = createPinia();

const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(VueQueryPlugin);
app.use(RealtimePlugin);

app.mount('#app');

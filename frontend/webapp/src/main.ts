import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { RealtimePlugin, useRoom } from '@/net/realtime.ts';

import { routes } from '@/routes.ts';

import App from '@/App.vue';

import '@/style/global.scss';

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from) => {
    const room = useRoom();

    if(!to.meta.requiresRoomConnection) {
        room.disconnect();
    } else if(to.params.id !== from.params.id) {
        room.connect(to.params.id as string);
    }
});

const pinia = createPinia();

const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(VueQueryPlugin);
app.use(RealtimePlugin);

app.mount('#app');

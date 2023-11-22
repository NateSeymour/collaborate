import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { RealtimePlugin } from '@/net/realtime.ts';
import { router } from '@/router.ts';
import {apiClient} from "@/api/api.ts";


import App from '@/App.vue';

import '@/style/global.scss';

const pinia = createPinia();

const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(VueQueryPlugin, {
    queryClient: apiClient,
});
app.use(RealtimePlugin);

app.mount('#app');

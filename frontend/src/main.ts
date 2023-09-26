import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { routes } from '@/routes';

import App from '@/App.vue';

import '@/style/global.scss';

console.log(process.env.NODE_ENV);

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const pinia = createPinia();

const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(VueQueryPlugin);

app.mount('#app');

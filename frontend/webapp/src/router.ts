import { createRouter, createWebHistory } from 'vue-router';
import { routes } from '@/routes.ts';
import {fetchQuery} from "@/api/api.ts";
import { User } from 'pb/Swifteams';

export const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Privilege Enforcement
router.beforeEach(async (to) => {
    if(to.meta.privilege) {
        let user;
        try {
            user = await fetchQuery<User>('/auth/User', {
                queryKey: ['auth', 'user'],
            });
        } catch(e) {
            // TODO: re-route to original page after login
            return `/Login?target=${to.path}`;
        }

        if(user.privilege !== to.meta.privilege) {
            // TODO: replace with unauthorized page
            return '/Welcome';
        }
    }
});
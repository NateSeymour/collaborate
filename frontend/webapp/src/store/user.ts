import { defineStore } from 'pinia';
import { onMounted, ref } from 'vue';
import { User, UserSubscriptionType } from 'pb/User';
import { config } from '@/config';

export const useUserStore = defineStore('user', () => {
    const loggedIn = ref(false);
    const user = ref<User>({
        id: '',
        subscriptionType: UserSubscriptionType.USER_SUBSCRIPTION_FREE,
    });

    onMounted(async () => {
        const userResponse = await fetch(`${config.api.auth}/User`, {
            method: 'GET',
        });

        if(userResponse.ok) {
            user.value = await userResponse.json();
            loggedIn.value = true;
        } else {
            const guestResponse = await fetch(`${config.api.auth}/Login`, {
                method: 'POST',
                body: JSON.stringify({
                    username: 'guest',
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            user.value = await guestResponse.json();
            loggedIn.value = true;
        }
    });

    return { loggedIn, user };
});
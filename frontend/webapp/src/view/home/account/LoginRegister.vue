<template>
    <div class="register">
        <div class="register-box">
            <h1 v-if="action === 'register'">Create Account</h1>
            <h1 v-if="action === 'login'">Welcome Back</h1>

            <div class="sso">
                <button class="sso-button">
                    <img src="@/assets/logos/google.png" />
                </button>

                <button class="sso-button">
                    <img src="@/assets/logos/github.png" />
                </button>
            </div>

            <div class="traditional" @input="formHandler">
                <TextBox name="email" hint="email@example.com" />
                <TextBox name="password" type="password" hint="password123" />

                <div class="actions">
                    <Button v-if="action === 'register'" :action="register" visual-placement="foreground">Register</Button>
                    <Button v-if="action === 'login'" :action="login" visual-placement="foreground">Login</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from '@/components/form/Button.vue';
import TextBox from '@/components/form/TextBox.vue';
import { useForm } from '@/util/form';
import { useRouter } from 'vue-router';
import {buildMutation} from "@/api/api";
import {LoginRequest, RegisterRequest} from "@/api/auth";

const props = defineProps<{
    action: 'login' | 'register',
}>();

const router = useRouter();

const [form, formHandler] = useForm();

const register = buildMutation<RegisterRequest, void>('/auth/Register', {
    cacheKey: ['auth', 'user'],
    body: () => form.value as RegisterRequest,
    onSuccess: () => {
        router.push('/RegistrationStaging');
    }
});

const login = buildMutation<LoginRequest, void>('/auth/Login', {
    cacheKey: ['auth', 'user'],
    body: () => form.value as LoginRequest,
    onSuccess: () => {
        router.push('/Welcome');
    }
});
</script>

<style lang="scss" scoped>
@use "@/style/common";

.register {
    @include common.fullsize;

    display: flex;
    justify-content: center;
    align-items: center;

    .register-box {
        width: 30em;
        max-width: 80%;
        border: 1px solid var(--text);
        padding: 2em;
        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
            text-align: center;
        }

        .sso {
            border-bottom: 1px solid var(--text);
            color: var(--text);
            padding: 1em;
            margin: 0.5em 0 2em 0;
            display: grid;
            grid-column-gap: 0.5em;
            grid-template-columns: 1fr 1fr;

            .sso-button {
                @include common.size(4em, 4em);
                padding: 0.4em;
                cursor: pointer;

                img {
                    max-width: 100%;
                    max-height: 100%;
                }
            }
        }

        .traditional {
            display: grid;
            grid-row-gap: 2em;
            width: 100%;

            .actions {
                button {
                    width: 100%;
                }
            }
        }
    }
}
</style>
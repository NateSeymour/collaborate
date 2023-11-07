<template>
    <div class="register">
        <div class="register-box">
            <h1>Create Account</h1>

            <div class="sso">

            </div>

            <div class="traditional">
                <Textbox name="Email" hint="email@example.com" />
                <Textbox name="Password" type="password" hint="password123" />

                <Button>Register</Button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "@/style/common";

.register {
    @include common.fullsize;

    display: flex;
    justify-content: center;
    align-items: center;

    .register-box {
        width: 50%;
        border: 1px solid var(--text);
        padding: 2em;

        h1 {
            text-align: center;
        }

        .sso {
            border-bottom: 1px solid var(--text);
        }

        .traditional {
            display: grid;
            grid-row-gap: 2em;
        }
    }
}
</style>
<script setup lang="ts">
import Button from "@/components/ui/Button.vue";
import Textbox from "@/components/ui/Textbox.vue";
</script>
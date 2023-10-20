<template>
    <div class="form">
        <div class="section" v-for="section in data.sections">
            <h3>{{ section.title }}</h3>
            <div class="input" v-for="input in section.inputs">
                <div v-if="input.type === 'text'" class="text">
                    <p>{{ input.title }}</p>
                    <input type="text">
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {reactive} from "vue";

interface FormProps {
    data: {
        sections: {
            title: string,
            inputs: {
                name: string,
                title: string,
                type: 'text',
            }[],
        }[],
    },
}

const { data } = defineProps<FormProps>();

const returnData = reactive({});
</script>

<style lang="scss" scoped>
@use "@/style/common";

.form {
    padding: 1em;

    .section {
        width: 100%;
        color: white;
        font-family: common.$font-title;
    }
}
</style>
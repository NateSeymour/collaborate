<template>
    <div class="textbox">
        <label :for="`textbox-${props.name}`">{{ props.name }}</label>
        <input :id="`textbox-${props.name}`" :type="props.type || 'text'" :placeholder="props.hint || ''">
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    name: string,
    type?: string,
    hint?: string,
}>();
</script>

<style lang="scss" scoped>
@use "@/style/common";

.textbox {
    display: flex;
    flex-direction: column;

    label {
        color: var(--text);
        font-family: common.$font-title;
    }

    input {
        background: none;
        border: none;
        border-bottom: 1px solid var(--text);
        outline: none;
        color: var(--text);
        font-size: 18px;
        padding: 0.25em 0 0.25em 0;
    }
}
</style>
<template>
    <button>
        <slot></slot>
    </button>
</template>

<style scoped lang="scss">
@use "@/style/common";

button {
    font-size: 20px;
    width: 10em;
    height: 3em;
    color: white;
    font-family: common.$font-title;
    font-weight: 600;
    background: common.$accent-color;
    border: none;
    cursor: pointer;
}
</style>
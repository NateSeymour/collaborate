<template>
    <div class="paint-together">
        <div class="canvas-composite-layers">
            <canvas ref="paintLayer" id="paint-layer" class="composite-layer"></canvas>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.paint-together {
    width: 100%;
    height: 100%;

    .canvas-composite-layers {
        position: relative;
        width: 100%;
        height: 100%;

        .composite-layer {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: transparent;
        }
    }
}
</style>
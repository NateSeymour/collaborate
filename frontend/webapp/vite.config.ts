import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: '../dist',
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'index.html'),
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    plugins: [vue()],
});

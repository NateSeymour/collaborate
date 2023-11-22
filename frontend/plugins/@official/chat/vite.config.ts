import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: path.resolve(__dirname, '../../dist/@official/chat'),
        emptyOutDir: true,
        lib: {
            entry: path.resolve(__dirname, 'src/plugin.ts'),
            name: '@official/chat',
            fileName: 'index',
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@public': path.resolve(__dirname, 'public'),
        },
    },
    plugins: [
        vue(),
    ],
});

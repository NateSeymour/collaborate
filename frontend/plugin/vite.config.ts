import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// Plugin loader
function pluginLoader() {
    return {
        name: 'rollup-plugin-swft-loader',
        resolveId(source) {
            if(source.endsWith('.swft')) {
                return source;
            }

            return null;
        },
        load(id) {
            return 'export default "This is virtual!"';
        }
    };
}

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: path.resolve(__dirname, 'dist'),
        emptyOutDir: true,
        lib: {
            entry: path.resolve(__dirname, 'src/@official/chat.swft'),
            fileName: '@official/chat',
            formats: ['es', 'cjs'],
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
        pluginLoader(),
    ],
});

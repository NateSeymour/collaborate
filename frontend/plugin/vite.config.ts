import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// Plugin loader
function pluginLoader() {
    let pluginEntry, manifest;

    return {
        name: 'rollup-plugin-swft-loader',
        async resolveId(source, importer, options) {
            if(source.endsWith('.swft')) {
                // Resolve submodules
                pluginEntry = await this.resolve(`${source}/plugin.ts`, importer, options);
                if(pluginEntry && !pluginEntry.external) {

                } else {
                    return null;
                }

                manifest = await this.resolve(`${source}/manifest.json`, importer, options);
                if(manifest && ! manifest.external) {
                    const moduleInfo = await this.load(manifest);

                    this.emitFile({
                        type: 'asset',
                        fileName: `@official/manifest.json`,
                        code: moduleInfo.code,
                    });
                } else {
                    return null;
                }

                return source;
            }

            return null;
        },
        load(id) {
            if(!id.endsWith('.swft')) return null;

            /*
            this.emitFile({
                type: 'chunk',
                id: `${id}/manifest.json`,
            });*/

            return `
                import plugin from '${id}/plugin.ts';
                import manifest from '${id}/manifest.json';
                
                export default {
                    plugin, manifest
                };
            `;
        },
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

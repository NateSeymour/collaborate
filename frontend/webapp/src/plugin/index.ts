import { Component, Ref } from 'vue';

interface PluginStore {
    [key: string]: Ref,
}

type PluginSetupFunction = (plugin: Plugin) => PluginStore;

export class Plugin {
    component: Component;
    store: PluginStore;

    constructor(component: Component, setup: PluginSetupFunction) {
        this.component = component;

        this.store = setup(this);
    }
}

interface PluginConfiguration {
    name: string,
}

interface PluginImportType {
    pluginConfiguration: PluginConfiguration,
    activity: Component | undefined,
    plugin: Plugin,
}

type PluginFunction = () => Promise<PluginImportType>;

interface PluginDefinitions {
    [key: string]: PluginFunction,
}

export const plugins: PluginDefinitions = {
    '@builtin/chat': () => import('@/plugin/chat'),
};
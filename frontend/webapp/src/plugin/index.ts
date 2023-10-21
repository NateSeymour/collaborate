import {Component} from "vue";

import chat from '@/plugin/@official/chat/manifest.ts';

export interface PluginConfiguration {
    name: string,
    description: string,
    version: string,
}

export class Plugin {
    config: PluginConfiguration = {
        name: '@official/generic',
        description: 'Generic Plugin',
        version: '0.0.0',
    };

    getActivity(): Promise<Component> {
        return import('@/components/Dummy.vue');
    }

    constructor() {}
}

export const officialPlugins: Plugin[] = [
    chat,
];
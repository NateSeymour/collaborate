import {Component} from "vue";
import Dummy from '@/components/Dummy.vue';

import chat from '@/plugin/@official/chat/manifest.ts';

export interface PluginConfiguration {
    name: string,
    description: string,
    category: string,
    version: string,

    settings: any,

    dependencies: string[],
    relationships: string[],
    events: {
        [name: string]: any,
    },
    stores: {
        [name: string]: any,
    },
    channels: {
        [name: string]: any,
    },
}

export class PluginManager {
    
};

export class Plugin {
    config: PluginConfiguration = {
        name: '@official/generic',
        description: 'Generic Plugin',
        category: 'Debug/Useless',
        version: '0.0.0',

        settings: {},

        dependencies: [],
        relationships: [],
        events: {},
        stores: {},
        channels: {},
    };

    activity(): Component {
        return <Dummy />;
    }

    constructor() {}
}

export const officialPlugins: Plugin[] = [
    chat,
];

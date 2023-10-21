import {Plugin, PluginConfiguration} from '@/plugin';

class ChatPlugin extends Plugin {
    config: PluginConfiguration = {
        name: '@official/chat',
        description: 'Simple textual chat plugin',
        version: '0.0.0',
    };

    constructor() {
        super();
    }
}

export default new ChatPlugin();
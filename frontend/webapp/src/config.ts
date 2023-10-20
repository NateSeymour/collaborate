interface CollaborationConfig {
    api: {
        broker: string,
        auth: string,
        realtime: string,
    },
    roomTemplates: {
        name: string,
        plugins: string[],
        short: string,
    }[],
}

const production = {
    api: {
        broker: 'https://collaborate.notyoursoftware.com/api/broker',
        auth: 'https://collaborate.notyoursoftware.com/api/auth',
        realtime: 'wss://collaborate.notyoursoftware.com/api/realtime',
    },
};

const development = {
    api: {
        broker: 'http://localhost:8080/api/broker',
        auth: 'http://localhost:8080/api/auth',
        realtime: 'ws://localhost:8080/api/realtime',
    },
};

export const config: CollaborationConfig = {
    ...(process.env.NODE_ENV === 'development' ? development : production),
    roomTemplates: [
        {
            name: 'Hangout',
            plugins: ['@builtin/chat'],
            short: 'Chat with your friends',
        },
        {
            name: 'Custom',
            plugins: [],
            short: 'Build your own room',
        },
    ],
};
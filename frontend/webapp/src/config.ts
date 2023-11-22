interface CollaborationConfig {
    api: {
        base: string,
    },
    roomTemplates: {
        name: string,
        plugins: string[],
        short: string,
    }[],
}

const production = {
    api: {
        base: 'https://swifteams.com/api',
    },
};

const development = {
    api: {
        base: 'https://localhost:8080/api',
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
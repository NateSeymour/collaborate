interface CollaborationConfig {
    api: {
        broker: string,
        realtime: string,
        realtimeHttp: string,
    },
};

const production = {
    api: {
        broker: 'https://collaborate.notyoursoftware.com/api/broker',
        realtime: 'wss://collaborate.notyoursoftware.com/api/realtime',
        realtimeHttp: 'https://collaborate.notyoursoftware.com/api/realtime',
    },
};

const development = {
    api: {
        broker: 'http://localhost:8080/api/broker',
        realtime: 'ws://localhost:8080/api/realtime',
        realtimeHttp: 'http://localhost:8080/api/realtime',
    },
};

export const config: CollaborationConfig = {
    ...(process.env.NODE_ENV === 'development' ? development : production)
};
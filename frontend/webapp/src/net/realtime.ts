import { onBeforeUnmount, onMounted } from 'vue';
import mitt from 'mitt';
import { config } from '@/config.ts';
import { ClientMessage, CloseCode, ServerBroadcast, ServerMessage, ServerMessageType } from 'collab-proto';

export type RoomState = 'connecting' | 'open' | 'closed';

type RoomEvents = {
    state: RoomState,
    broadcast: ServerBroadcast,
    error: string,
}

type RoomEventCallback = (event: any) => void;

class Room {
    roomId: string = 'lobby';
    ws: WebSocket | undefined;
    bus = mitt<RoomEvents>();

    send = (message: ClientMessage) => {
        this.ws?.send(ClientMessage.encode(message).finish());
    };

    disconnect = () => {
        this.bus.emit('state', 'closed');

        if(!this.ws) return;

        if(this.ws.readyState !== WebSocket.CLOSED) {
            this.ws.close(CloseCode.CLOSE_CODE_CLIENT_USER_REQUESTED, 'Client is done.');
        }
    };

    connect = (roomId: string) => {
        this.disconnect();

        this.bus.emit('state', 'connecting');

        this.roomId = roomId;
        this.ws = new WebSocket(`${config.api.realtime}/room/${this.roomId}`);

        this.ws.addEventListener('open', this.onOpen);
        this.ws.addEventListener('close', this.onClose);
        this.ws.addEventListener('error', this.onError);
        this.ws.addEventListener('message', this.onMessage);
    };

    reconnect = () => {
        console.log(`[Room] Reconnecting to ${this.roomId}`);

        this.connect(this.roomId);
    };

    onOpen = () => {
        console.log(`[Room] Opened connection to ${this.roomId}`);

        this.bus.emit('state', 'open');
    };

    onClose = async (ev: CloseEvent) => {
        console.log(`[Room] Closed connection to ${this.roomId} with code (${ev.code}) for "${ev.reason}".`);

        this.bus.emit('state', 'closed');

        switch(ev.code) {
        // Close codes that warrant a reconnect.
        case 4401:
            await fetch(`${config.api.realtimeHttp}/room/${this.roomId}/GuestAccess`);
            break;

            // Close codes do not requre a reconnect.
        case CloseCode.CLOSE_CODE_CLIENT_USER_REQUESTED:
        case CloseCode.CLOSE_CODE_NOTFOUND:
            return;
        }

        this.reconnect();
    };

    onError = (ev: Event) => {
        console.log(ev);
        this.bus.emit('error', ev.type);
    };

    onMessage = async (ev: MessageEvent<any>) => {
        const binaryMessage = new Uint8Array(await ev.data.arrayBuffer());
        const message = ServerMessage.decode(binaryMessage);

        switch(message.type) {
        case ServerMessageType.SERVER_MESSAGE_BROADCAST:
            this.bus.emit('broadcast', message.broadcast!);
            break;
        }
    };
}

export const room: Room = new Room();

export function useRoomEventCallback(type: keyof RoomEvents, callback: RoomEventCallback) {
    onMounted(() => {
        if(!room) {
            throw 'Invalid room object!';
        }

        room.bus.on(type, callback);
    });

    onBeforeUnmount(() => {
        if(!room) {
            throw 'Invalid room object!';
        }

        room.bus.off(type, callback);
    });
}

export function useRoom() : Room {
    return room;
}

export function RealtimePlugin() {}
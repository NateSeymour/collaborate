import { onBeforeUnmount, onMounted } from 'vue';
import { config } from '@/config';
import { ClientMessage, ClientMessageType } from 'pb/Client';
import { CloseCode } from 'pb/Connection';
import { ServerMessage, ServerMessageType } from 'pb/Server';
import mitt from 'mitt';

export type RoomState = 'connecting' | 'open' | 'closed';

type RoomEvents = {
    'state': RoomState,
    'client:UpdatePointers': ClientMessage,
    'client:ChatMessage': ClientMessage,
    'error': string,
}

type RoomEventCallback = (event: any) => void;

const RECONNECT_DELAY = 100;

class Room {
    id: string = 'lobby';
    ws: WebSocket | undefined;
    bus = mitt<RoomEvents>();
    pendingMessages: ClientMessage[] = [];
    reconnectDelay = RECONNECT_DELAY;

    sendPendingMessages = () => {
        this.pendingMessages.reverse();

        while(this.pendingMessages.length > 0) {
            this.send(this.pendingMessages.pop()!);
        }
    };

    send = (message: ClientMessage) => {
        if(this.ws?.readyState === WebSocket.OPEN) {
            this.ws?.send(ClientMessage.encode(message).finish());
        } else {
            this.pendingMessages.push(message);
        }
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

        this.id = roomId;
        this.ws = new WebSocket(`${config.api.realtime}/room/${this.id}`);

        this.ws.addEventListener('open', this.onOpen);
        this.ws.addEventListener('close', this.onClose);
        this.ws.addEventListener('error', this.onError);
        this.ws.addEventListener('message', this.onMessage);
    };

    reconnect = () => {
        console.log(`[Room] Reconnecting to ${this.id} in ${this.reconnectDelay}ms`);

        setTimeout(() => {
            this.reconnectDelay *= 2;
            this.connect(this.id);
        }, this.reconnectDelay);
    };

    onOpen = () => {
        console.log(`[Room] Opened connection to ${this.id}`);

        this.bus.emit('state', 'open');
        this.reconnectDelay = RECONNECT_DELAY;
        this.sendPendingMessages();
    };

    onClose = async (ev: CloseEvent) => {
        console.log(`[Room] Closed connection to ${this.id} with code (${ev.code}) for "${ev.reason}".`);

        this.bus.emit('state', 'closed');

        switch(ev.code) {
        // Close codes that warrant a reconnect.
        case 4401:
            //await fetch(`${config.api.realtimeHttp}/room/${this.id}/GuestAccess`);
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
        case ServerMessageType.RELAY:
            switch(message.relay!.type) {
            case ClientMessageType.UPDATE_POINTERS:
                this.bus.emit('client:UpdatePointers', message.relay!);
            }
            break;
        }
    };
}

export const room: Room = new Room();

export function useRoomEventCallback(type: keyof RoomEvents, callback: RoomEventCallback) {
    onMounted(() => {
        if(!room) {
            throw 'Invalid network-room object!';
        }

        room.bus.on(type, callback);
    });

    onBeforeUnmount(() => {
        if(!room) {
            throw 'Invalid network-room object!';
        }

        room.bus.off(type, callback);
    });
}

export function useRoom() : Room {
    return room;
}

export function RealtimePlugin() {}
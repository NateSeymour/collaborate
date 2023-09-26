import { ref, Ref } from 'vue';
import { useRoute } from 'vue-router';
import { config } from '@/config';

class Room {
    roomId: string;
    // @ts-ignore
    ws: WebSocket;
    state: Ref<'open' | 'closed' | 'error' | 'connecting'>;

    connect = () => {
        this.state.value = 'connecting';

        this.ws = new WebSocket(`${config.api.realtime}/room/${this.roomId}`);

        this.ws.addEventListener('open', this.onOpen);
        this.ws.addEventListener('close', this.onClose);
        this.ws.addEventListener('error', this.onError);
        this.ws.addEventListener('message', this.onMessage);
    }

    onOpen = () => {
        this.state.value = 'open';
        console.log(`[Room] Opened connection to ${this.roomId}`);
    }

    onClose = async (ev: CloseEvent) => {
        this.state.value = 'closed';
        console.log(`[Room] Closed connection to ${this.roomId} with code (${ev.code}) for "${ev.reason}". Reconnecting...`);

        switch(ev.code) {
            case 4404:
                return;
            case 4401:
                await fetch(`${config.api.realtimeHttp}/room/${this.roomId}/GuestAccess`);
                break;
        }

        this.connect();
    }

    onError = (ev: Event) => {
        console.log(ev);
    }

    onMessage = (ev: MessageEvent<any>) => {
        console.log(ev.data);
    }

    constructor(roomId: string) {
        this.roomId = roomId;
        this.state = ref('connecting');
        this.connect();
    }
};

let room = ref<Room>();

export function useRoom() {
    const route = useRoute();
    const roomId = route.params.roomId as string;

    if(!room.value || room.value.roomId !== roomId) {
        room.value = new Room(roomId);
    }

    return room;
}

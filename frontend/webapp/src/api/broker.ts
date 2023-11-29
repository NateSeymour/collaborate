import { RoomConfiguration } from 'pb/Swifteams.ts';

// /broker/CreateRoom
export interface CreateRoomRequest {
    name: string,
    marketplacePlugins: string[],
    developmentPlugins: string[],
}

export type CreateRoomResponse = RoomConfiguration;
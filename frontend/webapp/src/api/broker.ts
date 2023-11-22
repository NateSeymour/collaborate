import { RoomConfiguration } from 'pb/RoomConfiguration.ts';

// /broker/CreateRoom
export interface CreateRoomRequest {
    name: string,
    officialPlugins: string[],
    developmentPlugins: string[],
}

export type CreateRoomResponse = RoomConfiguration;
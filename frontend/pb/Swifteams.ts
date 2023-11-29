/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "./google/protobuf/timestamp";

export const protobufPackage = "";

/** COMMON TYPES */
export enum PointerType {
  POINTER_TYPE_UNSPECIFIED = 0,
  POINTER_TYPE_POINTER = 1,
  POINTER_TYPE_CURSOR = 2,
  POINTER_TYPE_TOUCH = 3,
  UNRECOGNIZED = -1,
}

export function pointerTypeFromJSON(object: any): PointerType {
  switch (object) {
    case 0:
    case "POINTER_TYPE_UNSPECIFIED":
      return PointerType.POINTER_TYPE_UNSPECIFIED;
    case 1:
    case "POINTER_TYPE_POINTER":
      return PointerType.POINTER_TYPE_POINTER;
    case 2:
    case "POINTER_TYPE_CURSOR":
      return PointerType.POINTER_TYPE_CURSOR;
    case 3:
    case "POINTER_TYPE_TOUCH":
      return PointerType.POINTER_TYPE_TOUCH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PointerType.UNRECOGNIZED;
  }
}

export function pointerTypeToJSON(object: PointerType): string {
  switch (object) {
    case PointerType.POINTER_TYPE_UNSPECIFIED:
      return "POINTER_TYPE_UNSPECIFIED";
    case PointerType.POINTER_TYPE_POINTER:
      return "POINTER_TYPE_POINTER";
    case PointerType.POINTER_TYPE_CURSOR:
      return "POINTER_TYPE_CURSOR";
    case PointerType.POINTER_TYPE_TOUCH:
      return "POINTER_TYPE_TOUCH";
    case PointerType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** STORE */
export enum StoreMemberType {
  MEMBER_UNSPECIFIED = 0,
  STRING = 1,
  NUMBER = 2,
  BOOLEAN = 5,
  TIMESTAMP = 6,
  COORDINATE = 3,
  USER = 4,
  UNRECOGNIZED = -1,
}

export function storeMemberTypeFromJSON(object: any): StoreMemberType {
  switch (object) {
    case 0:
    case "MEMBER_UNSPECIFIED":
      return StoreMemberType.MEMBER_UNSPECIFIED;
    case 1:
    case "STRING":
      return StoreMemberType.STRING;
    case 2:
    case "NUMBER":
      return StoreMemberType.NUMBER;
    case 5:
    case "BOOLEAN":
      return StoreMemberType.BOOLEAN;
    case 6:
    case "TIMESTAMP":
      return StoreMemberType.TIMESTAMP;
    case 3:
    case "COORDINATE":
      return StoreMemberType.COORDINATE;
    case 4:
    case "USER":
      return StoreMemberType.USER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StoreMemberType.UNRECOGNIZED;
  }
}

export function storeMemberTypeToJSON(object: StoreMemberType): string {
  switch (object) {
    case StoreMemberType.MEMBER_UNSPECIFIED:
      return "MEMBER_UNSPECIFIED";
    case StoreMemberType.STRING:
      return "STRING";
    case StoreMemberType.NUMBER:
      return "NUMBER";
    case StoreMemberType.BOOLEAN:
      return "BOOLEAN";
    case StoreMemberType.TIMESTAMP:
      return "TIMESTAMP";
    case StoreMemberType.COORDINATE:
      return "COORDINATE";
    case StoreMemberType.USER:
      return "USER";
    case StoreMemberType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum StoreAccessType {
  ACCESS_UNSPECIFIED = 0,
  PUBLIC = 1,
  PRODUCER = 2,
  HOST = 3,
  UNRECOGNIZED = -1,
}

export function storeAccessTypeFromJSON(object: any): StoreAccessType {
  switch (object) {
    case 0:
    case "ACCESS_UNSPECIFIED":
      return StoreAccessType.ACCESS_UNSPECIFIED;
    case 1:
    case "PUBLIC":
      return StoreAccessType.PUBLIC;
    case 2:
    case "PRODUCER":
      return StoreAccessType.PRODUCER;
    case 3:
    case "HOST":
      return StoreAccessType.HOST;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StoreAccessType.UNRECOGNIZED;
  }
}

export function storeAccessTypeToJSON(object: StoreAccessType): string {
  switch (object) {
    case StoreAccessType.ACCESS_UNSPECIFIED:
      return "ACCESS_UNSPECIFIED";
    case StoreAccessType.PUBLIC:
      return "PUBLIC";
    case StoreAccessType.PRODUCER:
      return "PRODUCER";
    case StoreAccessType.HOST:
      return "HOST";
    case StoreAccessType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum StorePersistenceType {
  PERSISTENCE_UNSPECIFIED = 0,
  NONE = 1,
  PREFERRED = 2,
  REQUIRED = 3,
  UNRECOGNIZED = -1,
}

export function storePersistenceTypeFromJSON(object: any): StorePersistenceType {
  switch (object) {
    case 0:
    case "PERSISTENCE_UNSPECIFIED":
      return StorePersistenceType.PERSISTENCE_UNSPECIFIED;
    case 1:
    case "NONE":
      return StorePersistenceType.NONE;
    case 2:
    case "PREFERRED":
      return StorePersistenceType.PREFERRED;
    case 3:
    case "REQUIRED":
      return StorePersistenceType.REQUIRED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StorePersistenceType.UNRECOGNIZED;
  }
}

export function storePersistenceTypeToJSON(object: StorePersistenceType): string {
  switch (object) {
    case StorePersistenceType.PERSISTENCE_UNSPECIFIED:
      return "PERSISTENCE_UNSPECIFIED";
    case StorePersistenceType.NONE:
      return "NONE";
    case StorePersistenceType.PREFERRED:
      return "PREFERRED";
    case StorePersistenceType.REQUIRED:
      return "REQUIRED";
    case StorePersistenceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** USER */
export enum UserSubscriptionType {
  USER_SUBSCRIPTION_UNSPECIFIED = 0,
  USER_SUBSCRIPTION_FREE = 1,
  USER_SUBSCRIPTION_PREMIUM = 2,
  UNRECOGNIZED = -1,
}

export function userSubscriptionTypeFromJSON(object: any): UserSubscriptionType {
  switch (object) {
    case 0:
    case "USER_SUBSCRIPTION_UNSPECIFIED":
      return UserSubscriptionType.USER_SUBSCRIPTION_UNSPECIFIED;
    case 1:
    case "USER_SUBSCRIPTION_FREE":
      return UserSubscriptionType.USER_SUBSCRIPTION_FREE;
    case 2:
    case "USER_SUBSCRIPTION_PREMIUM":
      return UserSubscriptionType.USER_SUBSCRIPTION_PREMIUM;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UserSubscriptionType.UNRECOGNIZED;
  }
}

export function userSubscriptionTypeToJSON(object: UserSubscriptionType): string {
  switch (object) {
    case UserSubscriptionType.USER_SUBSCRIPTION_UNSPECIFIED:
      return "USER_SUBSCRIPTION_UNSPECIFIED";
    case UserSubscriptionType.USER_SUBSCRIPTION_FREE:
      return "USER_SUBSCRIPTION_FREE";
    case UserSubscriptionType.USER_SUBSCRIPTION_PREMIUM:
      return "USER_SUBSCRIPTION_PREMIUM";
    case UserSubscriptionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ClientRole {
  CLIENT_ROLE_UNSPECIFIED = 0,
  GUEST = 1,
  ROOM_OWNER = 2,
  SERVER_ADMIN = 3,
  UNRECOGNIZED = -1,
}

export function clientRoleFromJSON(object: any): ClientRole {
  switch (object) {
    case 0:
    case "CLIENT_ROLE_UNSPECIFIED":
      return ClientRole.CLIENT_ROLE_UNSPECIFIED;
    case 1:
    case "GUEST":
      return ClientRole.GUEST;
    case 2:
    case "ROOM_OWNER":
      return ClientRole.ROOM_OWNER;
    case 3:
    case "SERVER_ADMIN":
      return ClientRole.SERVER_ADMIN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClientRole.UNRECOGNIZED;
  }
}

export function clientRoleToJSON(object: ClientRole): string {
  switch (object) {
    case ClientRole.CLIENT_ROLE_UNSPECIFIED:
      return "CLIENT_ROLE_UNSPECIFIED";
    case ClientRole.GUEST:
      return "GUEST";
    case ClientRole.ROOM_OWNER:
      return "ROOM_OWNER";
    case ClientRole.SERVER_ADMIN:
      return "SERVER_ADMIN";
    case ClientRole.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ClientMessageType {
  CLIENT_MESSAGE_TYPE_UNSPECIFIED = 0,
  UPDATE_NICKNAME = 1,
  UPDATE_POINTERS = 2,
  CHAT_MESSAGE = 3,
  UNRECOGNIZED = -1,
}

export function clientMessageTypeFromJSON(object: any): ClientMessageType {
  switch (object) {
    case 0:
    case "CLIENT_MESSAGE_TYPE_UNSPECIFIED":
      return ClientMessageType.CLIENT_MESSAGE_TYPE_UNSPECIFIED;
    case 1:
    case "UPDATE_NICKNAME":
      return ClientMessageType.UPDATE_NICKNAME;
    case 2:
    case "UPDATE_POINTERS":
      return ClientMessageType.UPDATE_POINTERS;
    case 3:
    case "CHAT_MESSAGE":
      return ClientMessageType.CHAT_MESSAGE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClientMessageType.UNRECOGNIZED;
  }
}

export function clientMessageTypeToJSON(object: ClientMessageType): string {
  switch (object) {
    case ClientMessageType.CLIENT_MESSAGE_TYPE_UNSPECIFIED:
      return "CLIENT_MESSAGE_TYPE_UNSPECIFIED";
    case ClientMessageType.UPDATE_NICKNAME:
      return "UPDATE_NICKNAME";
    case ClientMessageType.UPDATE_POINTERS:
      return "UPDATE_POINTERS";
    case ClientMessageType.CHAT_MESSAGE:
      return "CHAT_MESSAGE";
    case ClientMessageType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** CONNECTION */
export enum CloseCode {
  CLOSE_CODE_UNSPECIFIED = 0,
  CLOSE_CODE_NORMAL = 1006,
  CLOSE_CODE_UNAUTHORIZED = 4401,
  CLOSE_CODE_NOTFOUND = 4404,
  CLOSE_CODE_CLIENT_USER_REQUESTED = 4100,
  CLOSE_CODE_ROOM_EXPIRED = 4001,
  UNRECOGNIZED = -1,
}

export function closeCodeFromJSON(object: any): CloseCode {
  switch (object) {
    case 0:
    case "CLOSE_CODE_UNSPECIFIED":
      return CloseCode.CLOSE_CODE_UNSPECIFIED;
    case 1006:
    case "CLOSE_CODE_NORMAL":
      return CloseCode.CLOSE_CODE_NORMAL;
    case 4401:
    case "CLOSE_CODE_UNAUTHORIZED":
      return CloseCode.CLOSE_CODE_UNAUTHORIZED;
    case 4404:
    case "CLOSE_CODE_NOTFOUND":
      return CloseCode.CLOSE_CODE_NOTFOUND;
    case 4100:
    case "CLOSE_CODE_CLIENT_USER_REQUESTED":
      return CloseCode.CLOSE_CODE_CLIENT_USER_REQUESTED;
    case 4001:
    case "CLOSE_CODE_ROOM_EXPIRED":
      return CloseCode.CLOSE_CODE_ROOM_EXPIRED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CloseCode.UNRECOGNIZED;
  }
}

export function closeCodeToJSON(object: CloseCode): string {
  switch (object) {
    case CloseCode.CLOSE_CODE_UNSPECIFIED:
      return "CLOSE_CODE_UNSPECIFIED";
    case CloseCode.CLOSE_CODE_NORMAL:
      return "CLOSE_CODE_NORMAL";
    case CloseCode.CLOSE_CODE_UNAUTHORIZED:
      return "CLOSE_CODE_UNAUTHORIZED";
    case CloseCode.CLOSE_CODE_NOTFOUND:
      return "CLOSE_CODE_NOTFOUND";
    case CloseCode.CLOSE_CODE_CLIENT_USER_REQUESTED:
      return "CLOSE_CODE_CLIENT_USER_REQUESTED";
    case CloseCode.CLOSE_CODE_ROOM_EXPIRED:
      return "CLOSE_CODE_ROOM_EXPIRED";
    case CloseCode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** SERVER */
export enum ServerMessageType {
  SERVER_MESSAGE_UNSPECIFIED = 0,
  RELAY = 1,
  UNRECOGNIZED = -1,
}

export function serverMessageTypeFromJSON(object: any): ServerMessageType {
  switch (object) {
    case 0:
    case "SERVER_MESSAGE_UNSPECIFIED":
      return ServerMessageType.SERVER_MESSAGE_UNSPECIFIED;
    case 1:
    case "RELAY":
      return ServerMessageType.RELAY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ServerMessageType.UNRECOGNIZED;
  }
}

export function serverMessageTypeToJSON(object: ServerMessageType): string {
  switch (object) {
    case ServerMessageType.SERVER_MESSAGE_UNSPECIFIED:
      return "SERVER_MESSAGE_UNSPECIFIED";
    case ServerMessageType.RELAY:
      return "RELAY";
    case ServerMessageType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** ROOM */
export enum RoomType {
  ROOM_TYPE_UNSPECIFIED = 0,
  STANDARD = 1,
  FREE = 2,
  UNRECOGNIZED = -1,
}

export function roomTypeFromJSON(object: any): RoomType {
  switch (object) {
    case 0:
    case "ROOM_TYPE_UNSPECIFIED":
      return RoomType.ROOM_TYPE_UNSPECIFIED;
    case 1:
    case "STANDARD":
      return RoomType.STANDARD;
    case 2:
    case "FREE":
      return RoomType.FREE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RoomType.UNRECOGNIZED;
  }
}

export function roomTypeToJSON(object: RoomType): string {
  switch (object) {
    case RoomType.ROOM_TYPE_UNSPECIFIED:
      return "ROOM_TYPE_UNSPECIFIED";
    case RoomType.STANDARD:
      return "STANDARD";
    case RoomType.FREE:
      return "FREE";
    case RoomType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Coordinates {
  x: number;
  y: number;
}

/** PLUGINS */
export interface PluginDefinition {
  name: string;
  description: string;
  version: string;
  dependencies: string[];
}

export interface PluginStoreDefinition {
  members: { [key: string]: StoreMemberType };
}

export interface PluginStoreDefinition_MembersEntry {
  key: string;
  value: StoreMemberType;
}

export interface PluginManifest {
  manifestVersion: number;
  plugin: PluginDefinition | undefined;
  store: { [key: string]: PluginStoreDefinition };
}

export interface PluginManifest_StoreEntry {
  key: string;
  value: PluginStoreDefinition | undefined;
}

export interface User {
  subscriptionType: UserSubscriptionType;
  id: number;
  preferredNickname: string;
  email: string;
  firstName: string;
  lastName: string;
}

/** POINTER */
export interface Pointer {
  pointerType: PointerType;
  coordinates: Coordinates | undefined;
}

export interface PointerCollection {
  pointers: Pointer[];
}

export interface Client {
  userId: string;
  role: ClientRole;
  nickname: string;
  pointers: PointerCollection | undefined;
}

export interface ClientChatMessage {
  text: string;
}

export interface ClientMessage {
  userId: number;
  type: ClientMessageType;
  timestamp: Date | undefined;
  nickname?: string | undefined;
  pointers?: PointerCollection | undefined;
  chatMessage?: ClientChatMessage | undefined;
}

export interface ServerMessage {
  type: ServerMessageType;
  relay?: ClientMessage | undefined;
}

export interface RoomConfiguration {
  type: RoomType;
  id: string;
  name: string;
  expiry: number;
  plugins: string[];
}

function createBaseCoordinates(): Coordinates {
  return { x: 0, y: 0 };
}

export const Coordinates = {
  encode(message: Coordinates, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(9).double(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(17).double(message.y);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Coordinates {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoordinates();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.x = reader.double();
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.y = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Coordinates {
    return {
      x: isSet(object.x) ? globalThis.Number(object.x) : 0,
      y: isSet(object.y) ? globalThis.Number(object.y) : 0,
    };
  },

  toJSON(message: Coordinates): unknown {
    const obj: any = {};
    if (message.x !== 0) {
      obj.x = message.x;
    }
    if (message.y !== 0) {
      obj.y = message.y;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Coordinates>, I>>(base?: I): Coordinates {
    return Coordinates.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Coordinates>, I>>(object: I): Coordinates {
    const message = createBaseCoordinates();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    return message;
  },
};

function createBasePluginDefinition(): PluginDefinition {
  return { name: "", description: "", version: "", dependencies: [] };
}

export const PluginDefinition = {
  encode(message: PluginDefinition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.version !== "") {
      writer.uint32(26).string(message.version);
    }
    for (const v of message.dependencies) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PluginDefinition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePluginDefinition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.version = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.dependencies.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PluginDefinition {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      dependencies: globalThis.Array.isArray(object?.dependencies)
        ? object.dependencies.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: PluginDefinition): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.dependencies?.length) {
      obj.dependencies = message.dependencies;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PluginDefinition>, I>>(base?: I): PluginDefinition {
    return PluginDefinition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PluginDefinition>, I>>(object: I): PluginDefinition {
    const message = createBasePluginDefinition();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.version = object.version ?? "";
    message.dependencies = object.dependencies?.map((e) => e) || [];
    return message;
  },
};

function createBasePluginStoreDefinition(): PluginStoreDefinition {
  return { members: {} };
}

export const PluginStoreDefinition = {
  encode(message: PluginStoreDefinition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.members).forEach(([key, value]) => {
      PluginStoreDefinition_MembersEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PluginStoreDefinition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePluginStoreDefinition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = PluginStoreDefinition_MembersEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.members[entry1.key] = entry1.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PluginStoreDefinition {
    return {
      members: isObject(object.members)
        ? Object.entries(object.members).reduce<{ [key: string]: StoreMemberType }>((acc, [key, value]) => {
          acc[key] = storeMemberTypeFromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: PluginStoreDefinition): unknown {
    const obj: any = {};
    if (message.members) {
      const entries = Object.entries(message.members);
      if (entries.length > 0) {
        obj.members = {};
        entries.forEach(([k, v]) => {
          obj.members[k] = storeMemberTypeToJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PluginStoreDefinition>, I>>(base?: I): PluginStoreDefinition {
    return PluginStoreDefinition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PluginStoreDefinition>, I>>(object: I): PluginStoreDefinition {
    const message = createBasePluginStoreDefinition();
    message.members = Object.entries(object.members ?? {}).reduce<{ [key: string]: StoreMemberType }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = value as StoreMemberType;
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBasePluginStoreDefinition_MembersEntry(): PluginStoreDefinition_MembersEntry {
  return { key: "", value: 0 };
}

export const PluginStoreDefinition_MembersEntry = {
  encode(message: PluginStoreDefinition_MembersEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PluginStoreDefinition_MembersEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePluginStoreDefinition_MembersEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PluginStoreDefinition_MembersEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? storeMemberTypeFromJSON(object.value) : 0,
    };
  },

  toJSON(message: PluginStoreDefinition_MembersEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== 0) {
      obj.value = storeMemberTypeToJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PluginStoreDefinition_MembersEntry>, I>>(
    base?: I,
  ): PluginStoreDefinition_MembersEntry {
    return PluginStoreDefinition_MembersEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PluginStoreDefinition_MembersEntry>, I>>(
    object: I,
  ): PluginStoreDefinition_MembersEntry {
    const message = createBasePluginStoreDefinition_MembersEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? 0;
    return message;
  },
};

function createBasePluginManifest(): PluginManifest {
  return { manifestVersion: 0, plugin: undefined, store: {} };
}

export const PluginManifest = {
  encode(message: PluginManifest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.manifestVersion !== 0) {
      writer.uint32(8).uint32(message.manifestVersion);
    }
    if (message.plugin !== undefined) {
      PluginDefinition.encode(message.plugin, writer.uint32(18).fork()).ldelim();
    }
    Object.entries(message.store).forEach(([key, value]) => {
      PluginManifest_StoreEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PluginManifest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePluginManifest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.manifestVersion = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.plugin = PluginDefinition.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          const entry3 = PluginManifest_StoreEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.store[entry3.key] = entry3.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PluginManifest {
    return {
      manifestVersion: isSet(object.manifestVersion) ? globalThis.Number(object.manifestVersion) : 0,
      plugin: isSet(object.plugin) ? PluginDefinition.fromJSON(object.plugin) : undefined,
      store: isObject(object.store)
        ? Object.entries(object.store).reduce<{ [key: string]: PluginStoreDefinition }>((acc, [key, value]) => {
          acc[key] = PluginStoreDefinition.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: PluginManifest): unknown {
    const obj: any = {};
    if (message.manifestVersion !== 0) {
      obj.manifestVersion = Math.round(message.manifestVersion);
    }
    if (message.plugin !== undefined) {
      obj.plugin = PluginDefinition.toJSON(message.plugin);
    }
    if (message.store) {
      const entries = Object.entries(message.store);
      if (entries.length > 0) {
        obj.store = {};
        entries.forEach(([k, v]) => {
          obj.store[k] = PluginStoreDefinition.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PluginManifest>, I>>(base?: I): PluginManifest {
    return PluginManifest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PluginManifest>, I>>(object: I): PluginManifest {
    const message = createBasePluginManifest();
    message.manifestVersion = object.manifestVersion ?? 0;
    message.plugin = (object.plugin !== undefined && object.plugin !== null)
      ? PluginDefinition.fromPartial(object.plugin)
      : undefined;
    message.store = Object.entries(object.store ?? {}).reduce<{ [key: string]: PluginStoreDefinition }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = PluginStoreDefinition.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBasePluginManifest_StoreEntry(): PluginManifest_StoreEntry {
  return { key: "", value: undefined };
}

export const PluginManifest_StoreEntry = {
  encode(message: PluginManifest_StoreEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      PluginStoreDefinition.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PluginManifest_StoreEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePluginManifest_StoreEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = PluginStoreDefinition.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PluginManifest_StoreEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? PluginStoreDefinition.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: PluginManifest_StoreEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = PluginStoreDefinition.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PluginManifest_StoreEntry>, I>>(base?: I): PluginManifest_StoreEntry {
    return PluginManifest_StoreEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PluginManifest_StoreEntry>, I>>(object: I): PluginManifest_StoreEntry {
    const message = createBasePluginManifest_StoreEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? PluginStoreDefinition.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseUser(): User {
  return { subscriptionType: 0, id: 0, preferredNickname: "", email: "", firstName: "", lastName: "" };
}

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subscriptionType !== 0) {
      writer.uint32(8).int32(message.subscriptionType);
    }
    if (message.id !== 0) {
      writer.uint32(40).uint64(message.id);
    }
    if (message.preferredNickname !== "") {
      writer.uint32(18).string(message.preferredNickname);
    }
    if (message.email !== "") {
      writer.uint32(26).string(message.email);
    }
    if (message.firstName !== "") {
      writer.uint32(50).string(message.firstName);
    }
    if (message.lastName !== "") {
      writer.uint32(58).string(message.lastName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.subscriptionType = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.id = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.preferredNickname = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.email = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.firstName = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.lastName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): User {
    return {
      subscriptionType: isSet(object.subscriptionType) ? userSubscriptionTypeFromJSON(object.subscriptionType) : 0,
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      preferredNickname: isSet(object.preferredNickname) ? globalThis.String(object.preferredNickname) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      firstName: isSet(object.firstName) ? globalThis.String(object.firstName) : "",
      lastName: isSet(object.lastName) ? globalThis.String(object.lastName) : "",
    };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    if (message.subscriptionType !== 0) {
      obj.subscriptionType = userSubscriptionTypeToJSON(message.subscriptionType);
    }
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.preferredNickname !== "") {
      obj.preferredNickname = message.preferredNickname;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.firstName !== "") {
      obj.firstName = message.firstName;
    }
    if (message.lastName !== "") {
      obj.lastName = message.lastName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<User>, I>>(base?: I): User {
    return User.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
    const message = createBaseUser();
    message.subscriptionType = object.subscriptionType ?? 0;
    message.id = object.id ?? 0;
    message.preferredNickname = object.preferredNickname ?? "";
    message.email = object.email ?? "";
    message.firstName = object.firstName ?? "";
    message.lastName = object.lastName ?? "";
    return message;
  },
};

function createBasePointer(): Pointer {
  return { pointerType: 0, coordinates: undefined };
}

export const Pointer = {
  encode(message: Pointer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pointerType !== 0) {
      writer.uint32(8).int32(message.pointerType);
    }
    if (message.coordinates !== undefined) {
      Coordinates.encode(message.coordinates, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pointer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePointer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.pointerType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.coordinates = Coordinates.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Pointer {
    return {
      pointerType: isSet(object.pointerType) ? pointerTypeFromJSON(object.pointerType) : 0,
      coordinates: isSet(object.coordinates) ? Coordinates.fromJSON(object.coordinates) : undefined,
    };
  },

  toJSON(message: Pointer): unknown {
    const obj: any = {};
    if (message.pointerType !== 0) {
      obj.pointerType = pointerTypeToJSON(message.pointerType);
    }
    if (message.coordinates !== undefined) {
      obj.coordinates = Coordinates.toJSON(message.coordinates);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Pointer>, I>>(base?: I): Pointer {
    return Pointer.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Pointer>, I>>(object: I): Pointer {
    const message = createBasePointer();
    message.pointerType = object.pointerType ?? 0;
    message.coordinates = (object.coordinates !== undefined && object.coordinates !== null)
      ? Coordinates.fromPartial(object.coordinates)
      : undefined;
    return message;
  },
};

function createBasePointerCollection(): PointerCollection {
  return { pointers: [] };
}

export const PointerCollection = {
  encode(message: PointerCollection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pointers) {
      Pointer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PointerCollection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePointerCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pointers.push(Pointer.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PointerCollection {
    return {
      pointers: globalThis.Array.isArray(object?.pointers) ? object.pointers.map((e: any) => Pointer.fromJSON(e)) : [],
    };
  },

  toJSON(message: PointerCollection): unknown {
    const obj: any = {};
    if (message.pointers?.length) {
      obj.pointers = message.pointers.map((e) => Pointer.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PointerCollection>, I>>(base?: I): PointerCollection {
    return PointerCollection.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PointerCollection>, I>>(object: I): PointerCollection {
    const message = createBasePointerCollection();
    message.pointers = object.pointers?.map((e) => Pointer.fromPartial(e)) || [];
    return message;
  },
};

function createBaseClient(): Client {
  return { userId: "", role: 0, nickname: "", pointers: undefined };
}

export const Client = {
  encode(message: Client, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.role !== 0) {
      writer.uint32(32).int32(message.role);
    }
    if (message.nickname !== "") {
      writer.uint32(18).string(message.nickname);
    }
    if (message.pointers !== undefined) {
      PointerCollection.encode(message.pointers, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Client {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.role = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nickname = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.pointers = PointerCollection.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Client {
    return {
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      role: isSet(object.role) ? clientRoleFromJSON(object.role) : 0,
      nickname: isSet(object.nickname) ? globalThis.String(object.nickname) : "",
      pointers: isSet(object.pointers) ? PointerCollection.fromJSON(object.pointers) : undefined,
    };
  },

  toJSON(message: Client): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.role !== 0) {
      obj.role = clientRoleToJSON(message.role);
    }
    if (message.nickname !== "") {
      obj.nickname = message.nickname;
    }
    if (message.pointers !== undefined) {
      obj.pointers = PointerCollection.toJSON(message.pointers);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Client>, I>>(base?: I): Client {
    return Client.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Client>, I>>(object: I): Client {
    const message = createBaseClient();
    message.userId = object.userId ?? "";
    message.role = object.role ?? 0;
    message.nickname = object.nickname ?? "";
    message.pointers = (object.pointers !== undefined && object.pointers !== null)
      ? PointerCollection.fromPartial(object.pointers)
      : undefined;
    return message;
  },
};

function createBaseClientChatMessage(): ClientChatMessage {
  return { text: "" };
}

export const ClientChatMessage = {
  encode(message: ClientChatMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClientChatMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientChatMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.text = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClientChatMessage {
    return { text: isSet(object.text) ? globalThis.String(object.text) : "" };
  },

  toJSON(message: ClientChatMessage): unknown {
    const obj: any = {};
    if (message.text !== "") {
      obj.text = message.text;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ClientChatMessage>, I>>(base?: I): ClientChatMessage {
    return ClientChatMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ClientChatMessage>, I>>(object: I): ClientChatMessage {
    const message = createBaseClientChatMessage();
    message.text = object.text ?? "";
    return message;
  },
};

function createBaseClientMessage(): ClientMessage {
  return { userId: 0, type: 0, timestamp: undefined, nickname: undefined, pointers: undefined, chatMessage: undefined };
}

export const ClientMessage = {
  encode(message: ClientMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== 0) {
      writer.uint32(8).uint64(message.userId);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(50).fork()).ldelim();
    }
    if (message.nickname !== undefined) {
      writer.uint32(26).string(message.nickname);
    }
    if (message.pointers !== undefined) {
      PointerCollection.encode(message.pointers, writer.uint32(34).fork()).ldelim();
    }
    if (message.chatMessage !== undefined) {
      ClientChatMessage.encode(message.chatMessage, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClientMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.userId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.nickname = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.pointers = PointerCollection.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.chatMessage = ClientChatMessage.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClientMessage {
    return {
      userId: isSet(object.userId) ? globalThis.Number(object.userId) : 0,
      type: isSet(object.type) ? clientMessageTypeFromJSON(object.type) : 0,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      nickname: isSet(object.nickname) ? globalThis.String(object.nickname) : undefined,
      pointers: isSet(object.pointers) ? PointerCollection.fromJSON(object.pointers) : undefined,
      chatMessage: isSet(object.chatMessage) ? ClientChatMessage.fromJSON(object.chatMessage) : undefined,
    };
  },

  toJSON(message: ClientMessage): unknown {
    const obj: any = {};
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    if (message.type !== 0) {
      obj.type = clientMessageTypeToJSON(message.type);
    }
    if (message.timestamp !== undefined) {
      obj.timestamp = message.timestamp.toISOString();
    }
    if (message.nickname !== undefined) {
      obj.nickname = message.nickname;
    }
    if (message.pointers !== undefined) {
      obj.pointers = PointerCollection.toJSON(message.pointers);
    }
    if (message.chatMessage !== undefined) {
      obj.chatMessage = ClientChatMessage.toJSON(message.chatMessage);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ClientMessage>, I>>(base?: I): ClientMessage {
    return ClientMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ClientMessage>, I>>(object: I): ClientMessage {
    const message = createBaseClientMessage();
    message.userId = object.userId ?? 0;
    message.type = object.type ?? 0;
    message.timestamp = object.timestamp ?? undefined;
    message.nickname = object.nickname ?? undefined;
    message.pointers = (object.pointers !== undefined && object.pointers !== null)
      ? PointerCollection.fromPartial(object.pointers)
      : undefined;
    message.chatMessage = (object.chatMessage !== undefined && object.chatMessage !== null)
      ? ClientChatMessage.fromPartial(object.chatMessage)
      : undefined;
    return message;
  },
};

function createBaseServerMessage(): ServerMessage {
  return { type: 0, relay: undefined };
}

export const ServerMessage = {
  encode(message: ServerMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.relay !== undefined) {
      ClientMessage.encode(message.relay, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServerMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.relay = ClientMessage.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ServerMessage {
    return {
      type: isSet(object.type) ? serverMessageTypeFromJSON(object.type) : 0,
      relay: isSet(object.relay) ? ClientMessage.fromJSON(object.relay) : undefined,
    };
  },

  toJSON(message: ServerMessage): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = serverMessageTypeToJSON(message.type);
    }
    if (message.relay !== undefined) {
      obj.relay = ClientMessage.toJSON(message.relay);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ServerMessage>, I>>(base?: I): ServerMessage {
    return ServerMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ServerMessage>, I>>(object: I): ServerMessage {
    const message = createBaseServerMessage();
    message.type = object.type ?? 0;
    message.relay = (object.relay !== undefined && object.relay !== null)
      ? ClientMessage.fromPartial(object.relay)
      : undefined;
    return message;
  },
};

function createBaseRoomConfiguration(): RoomConfiguration {
  return { type: 0, id: "", name: "", expiry: 0, plugins: [] };
}

export const RoomConfiguration = {
  encode(message: RoomConfiguration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.expiry !== 0) {
      writer.uint32(16).uint64(message.expiry);
    }
    for (const v of message.plugins) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoomConfiguration {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoomConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag !== 24) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.expiry = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.plugins.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RoomConfiguration {
    return {
      type: isSet(object.type) ? roomTypeFromJSON(object.type) : 0,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      expiry: isSet(object.expiry) ? globalThis.Number(object.expiry) : 0,
      plugins: globalThis.Array.isArray(object?.plugins) ? object.plugins.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: RoomConfiguration): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = roomTypeToJSON(message.type);
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.expiry !== 0) {
      obj.expiry = Math.round(message.expiry);
    }
    if (message.plugins?.length) {
      obj.plugins = message.plugins;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RoomConfiguration>, I>>(base?: I): RoomConfiguration {
    return RoomConfiguration.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RoomConfiguration>, I>>(object: I): RoomConfiguration {
    const message = createBaseRoomConfiguration();
    message.type = object.type ?? 0;
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.expiry = object.expiry ?? 0;
    message.plugins = object.plugins?.map((e) => e) || [];
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

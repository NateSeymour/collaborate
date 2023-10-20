/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PointerCollection } from "./Pointer";
import { Timestamp } from "./google/protobuf/timestamp";

export const protobufPackage = "";

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
  userId: string;
  type: ClientMessageType;
  timestamp: Date | undefined;
  nickname?: string | undefined;
  pointers?: PointerCollection | undefined;
  chatMessage?: ClientChatMessage | undefined;
}

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
  return {
    userId: "",
    type: 0,
    timestamp: undefined,
    nickname: undefined,
    pointers: undefined,
    chatMessage: undefined,
  };
}

export const ClientMessage = {
  encode(message: ClientMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
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
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
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
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      type: isSet(object.type) ? clientMessageTypeFromJSON(object.type) : 0,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      nickname: isSet(object.nickname) ? globalThis.String(object.nickname) : undefined,
      pointers: isSet(object.pointers) ? PointerCollection.fromJSON(object.pointers) : undefined,
      chatMessage: isSet(object.chatMessage) ? ClientChatMessage.fromJSON(object.chatMessage) : undefined,
    };
  },

  toJSON(message: ClientMessage): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
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
    message.userId = object.userId ?? "";
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

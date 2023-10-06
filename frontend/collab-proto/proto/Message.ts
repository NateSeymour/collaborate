/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export enum CloseCode {
  CLOSE_CODE_UNSPECIFIED = 0,
  CLOSE_CODE_NORMAL = 1006,
  CLOSE_CODE_UNAUTHORIZED = 4401,
  CLOSE_CODE_NOTFOUND = 4404,
  CLOSE_CODE_CLIENT_USER_REQUESTED = 4100,
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
    case CloseCode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ClientMessageType {
  CLIENT_MESSAGE_UNSPECIFIED = 0,
  CLIENT_MESSAGE_NICKNAME = 1,
  CLIENT_MESSAGE_MOUSEPOS = 2,
  UNRECOGNIZED = -1,
}

export function clientMessageTypeFromJSON(object: any): ClientMessageType {
  switch (object) {
    case 0:
    case "CLIENT_MESSAGE_UNSPECIFIED":
      return ClientMessageType.CLIENT_MESSAGE_UNSPECIFIED;
    case 1:
    case "CLIENT_MESSAGE_NICKNAME":
      return ClientMessageType.CLIENT_MESSAGE_NICKNAME;
    case 2:
    case "CLIENT_MESSAGE_MOUSEPOS":
      return ClientMessageType.CLIENT_MESSAGE_MOUSEPOS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClientMessageType.UNRECOGNIZED;
  }
}

export function clientMessageTypeToJSON(object: ClientMessageType): string {
  switch (object) {
    case ClientMessageType.CLIENT_MESSAGE_UNSPECIFIED:
      return "CLIENT_MESSAGE_UNSPECIFIED";
    case ClientMessageType.CLIENT_MESSAGE_NICKNAME:
      return "CLIENT_MESSAGE_NICKNAME";
    case ClientMessageType.CLIENT_MESSAGE_MOUSEPOS:
      return "CLIENT_MESSAGE_MOUSEPOS";
    case ClientMessageType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ServerMessageType {
  SERVER_MESSAGE_UNSPECIFIED = 0,
  SERVER_MESSAGE_BROADCAST = 1,
  UNRECOGNIZED = -1,
}

export function serverMessageTypeFromJSON(object: any): ServerMessageType {
  switch (object) {
    case 0:
    case "SERVER_MESSAGE_UNSPECIFIED":
      return ServerMessageType.SERVER_MESSAGE_UNSPECIFIED;
    case 1:
    case "SERVER_MESSAGE_BROADCAST":
      return ServerMessageType.SERVER_MESSAGE_BROADCAST;
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
    case ServerMessageType.SERVER_MESSAGE_BROADCAST:
      return "SERVER_MESSAGE_BROADCAST";
    case ServerMessageType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ClientNickname {
  nickname: string;
}

export interface ClientMousePos {
  x: number;
  y: number;
}

export interface ClientMessage {
  type: ClientMessageType;
  nickname?: ClientNickname | undefined;
  mousepos?: ClientMousePos | undefined;
}

export interface ServerBroadcast {
  clientIdent: string;
  message: ClientMessage | undefined;
}

export interface ServerMessage {
  type: ServerMessageType;
  broadcast?: ServerBroadcast | undefined;
}

function createBaseClientNickname(): ClientNickname {
  return { nickname: "" };
}

export const ClientNickname = {
  encode(message: ClientNickname, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nickname !== "") {
      writer.uint32(10).string(message.nickname);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClientNickname {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientNickname();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nickname = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClientNickname {
    return { nickname: isSet(object.nickname) ? globalThis.String(object.nickname) : "" };
  },

  toJSON(message: ClientNickname): unknown {
    const obj: any = {};
    if (message.nickname !== "") {
      obj.nickname = message.nickname;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ClientNickname>, I>>(base?: I): ClientNickname {
    return ClientNickname.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ClientNickname>, I>>(object: I): ClientNickname {
    const message = createBaseClientNickname();
    message.nickname = object.nickname ?? "";
    return message;
  },
};

function createBaseClientMousePos(): ClientMousePos {
  return { x: 0, y: 0 };
}

export const ClientMousePos = {
  encode(message: ClientMousePos, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(9).double(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(17).double(message.y);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClientMousePos {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientMousePos();
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

  fromJSON(object: any): ClientMousePos {
    return {
      x: isSet(object.x) ? globalThis.Number(object.x) : 0,
      y: isSet(object.y) ? globalThis.Number(object.y) : 0,
    };
  },

  toJSON(message: ClientMousePos): unknown {
    const obj: any = {};
    if (message.x !== 0) {
      obj.x = message.x;
    }
    if (message.y !== 0) {
      obj.y = message.y;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ClientMousePos>, I>>(base?: I): ClientMousePos {
    return ClientMousePos.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ClientMousePos>, I>>(object: I): ClientMousePos {
    const message = createBaseClientMousePos();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    return message;
  },
};

function createBaseClientMessage(): ClientMessage {
  return { type: 0, nickname: undefined, mousepos: undefined };
}

export const ClientMessage = {
  encode(message: ClientMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.nickname !== undefined) {
      ClientNickname.encode(message.nickname, writer.uint32(18).fork()).ldelim();
    }
    if (message.mousepos !== undefined) {
      ClientMousePos.encode(message.mousepos, writer.uint32(26).fork()).ldelim();
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

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nickname = ClientNickname.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.mousepos = ClientMousePos.decode(reader, reader.uint32());
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
      type: isSet(object.type) ? clientMessageTypeFromJSON(object.type) : 0,
      nickname: isSet(object.nickname) ? ClientNickname.fromJSON(object.nickname) : undefined,
      mousepos: isSet(object.mousepos) ? ClientMousePos.fromJSON(object.mousepos) : undefined,
    };
  },

  toJSON(message: ClientMessage): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = clientMessageTypeToJSON(message.type);
    }
    if (message.nickname !== undefined) {
      obj.nickname = ClientNickname.toJSON(message.nickname);
    }
    if (message.mousepos !== undefined) {
      obj.mousepos = ClientMousePos.toJSON(message.mousepos);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ClientMessage>, I>>(base?: I): ClientMessage {
    return ClientMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ClientMessage>, I>>(object: I): ClientMessage {
    const message = createBaseClientMessage();
    message.type = object.type ?? 0;
    message.nickname = (object.nickname !== undefined && object.nickname !== null)
      ? ClientNickname.fromPartial(object.nickname)
      : undefined;
    message.mousepos = (object.mousepos !== undefined && object.mousepos !== null)
      ? ClientMousePos.fromPartial(object.mousepos)
      : undefined;
    return message;
  },
};

function createBaseServerBroadcast(): ServerBroadcast {
  return { clientIdent: "", message: undefined };
}

export const ServerBroadcast = {
  encode(message: ServerBroadcast, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientIdent !== "") {
      writer.uint32(10).string(message.clientIdent);
    }
    if (message.message !== undefined) {
      ClientMessage.encode(message.message, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerBroadcast {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServerBroadcast();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clientIdent = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = ClientMessage.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ServerBroadcast {
    return {
      clientIdent: isSet(object.clientIdent) ? globalThis.String(object.clientIdent) : "",
      message: isSet(object.message) ? ClientMessage.fromJSON(object.message) : undefined,
    };
  },

  toJSON(message: ServerBroadcast): unknown {
    const obj: any = {};
    if (message.clientIdent !== "") {
      obj.clientIdent = message.clientIdent;
    }
    if (message.message !== undefined) {
      obj.message = ClientMessage.toJSON(message.message);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ServerBroadcast>, I>>(base?: I): ServerBroadcast {
    return ServerBroadcast.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ServerBroadcast>, I>>(object: I): ServerBroadcast {
    const message = createBaseServerBroadcast();
    message.clientIdent = object.clientIdent ?? "";
    message.message = (object.message !== undefined && object.message !== null)
      ? ClientMessage.fromPartial(object.message)
      : undefined;
    return message;
  },
};

function createBaseServerMessage(): ServerMessage {
  return { type: 0, broadcast: undefined };
}

export const ServerMessage = {
  encode(message: ServerMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.broadcast !== undefined) {
      ServerBroadcast.encode(message.broadcast, writer.uint32(18).fork()).ldelim();
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

          message.broadcast = ServerBroadcast.decode(reader, reader.uint32());
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
      broadcast: isSet(object.broadcast) ? ServerBroadcast.fromJSON(object.broadcast) : undefined,
    };
  },

  toJSON(message: ServerMessage): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = serverMessageTypeToJSON(message.type);
    }
    if (message.broadcast !== undefined) {
      obj.broadcast = ServerBroadcast.toJSON(message.broadcast);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ServerMessage>, I>>(base?: I): ServerMessage {
    return ServerMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ServerMessage>, I>>(object: I): ServerMessage {
    const message = createBaseServerMessage();
    message.type = object.type ?? 0;
    message.broadcast = (object.broadcast !== undefined && object.broadcast !== null)
      ? ServerBroadcast.fromPartial(object.broadcast)
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

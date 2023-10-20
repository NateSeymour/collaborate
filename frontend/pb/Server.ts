/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { ClientMessage } from "./Client";

export const protobufPackage = "";

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

export interface ServerMessage {
  type: ServerMessageType;
  relay?: ClientMessage | undefined;
}

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

/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import Long = require("long");

export const protobufPackage = "";

export enum RoomType {
  ROOM_TYPE_UNSPECIFIED = 0,
  ROOM_TYPE_STANDARD = 1,
  ROOM_TYPE_LOBBY = 2,
  UNRECOGNIZED = -1,
}

export function roomTypeFromJSON(object: any): RoomType {
  switch (object) {
    case 0:
    case "ROOM_TYPE_UNSPECIFIED":
      return RoomType.ROOM_TYPE_UNSPECIFIED;
    case 1:
    case "ROOM_TYPE_STANDARD":
      return RoomType.ROOM_TYPE_STANDARD;
    case 2:
    case "ROOM_TYPE_LOBBY":
      return RoomType.ROOM_TYPE_LOBBY;
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
    case RoomType.ROOM_TYPE_STANDARD:
      return "ROOM_TYPE_STANDARD";
    case RoomType.ROOM_TYPE_LOBBY:
      return "ROOM_TYPE_LOBBY";
    case RoomType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Room {
  type: RoomType;
  id: string;
  expiry: number;
}

function createBaseRoom(): Room {
  return { type: 0, id: "", expiry: 0 };
}

export const Room = {
  encode(message: Room, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.expiry !== 0) {
      writer.uint32(16).uint64(message.expiry);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Room {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoom();
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
        case 2:
          if (tag !== 16) {
            break;
          }

          message.expiry = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Room {
    return {
      type: isSet(object.type) ? roomTypeFromJSON(object.type) : 0,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      expiry: isSet(object.expiry) ? globalThis.Number(object.expiry) : 0,
    };
  },

  toJSON(message: Room): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = roomTypeToJSON(message.type);
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.expiry !== 0) {
      obj.expiry = Math.round(message.expiry);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Room>, I>>(base?: I): Room {
    return Room.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Room>, I>>(object: I): Room {
    const message = createBaseRoom();
    message.type = object.type ?? 0;
    message.id = object.id ?? "";
    message.expiry = object.expiry ?? 0;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

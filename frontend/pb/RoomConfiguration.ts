/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

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

export interface RoomConfiguration {
  type: RoomType;
  id: string;
  name: string;
  expiry: number;
  plugins: string[];
}

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

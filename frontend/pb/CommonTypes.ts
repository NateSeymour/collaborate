/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

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

export interface Coordinates {
  x: number;
  y: number;
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

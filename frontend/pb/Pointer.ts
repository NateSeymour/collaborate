/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Coordinates, PointerType, pointerTypeFromJSON, pointerTypeToJSON } from "./CommonTypes";

export const protobufPackage = "";

export interface Pointer {
  pointerType: PointerType;
  coordinates: Coordinates | undefined;
}

export interface PointerCollection {
  pointers: Pointer[];
}

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

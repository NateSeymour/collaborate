/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

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

export interface User {
  subscriptionType: UserSubscriptionType;
  id: number;
  preferredNickname: string;
  email: string;
  firstName: string;
  lastName: string;
}

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

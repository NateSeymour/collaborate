/* eslint-disable */

export const protobufPackage = "";

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

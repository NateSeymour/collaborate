/* Generated by the protocol buffer compiler.  DO NOT EDIT! */
/* Generated from: RoomConfiguration.proto */

/* Do not generate deprecated warnings for self */
#ifndef PROTOBUF_C__NO_DEPRECATED
#define PROTOBUF_C__NO_DEPRECATED
#endif

#include "RoomConfiguration.pb-c.h"
void   room_configuration__init
                     (RoomConfiguration         *message)
{
  static const RoomConfiguration init_value = ROOM_CONFIGURATION__INIT;
  *message = init_value;
}
size_t room_configuration__get_packed_size
                     (const RoomConfiguration *message)
{
  assert(message->base.descriptor == &room_configuration__descriptor);
  return protobuf_c_message_get_packed_size ((const ProtobufCMessage*)(message));
}
size_t room_configuration__pack
                     (const RoomConfiguration *message,
                      uint8_t       *out)
{
  assert(message->base.descriptor == &room_configuration__descriptor);
  return protobuf_c_message_pack ((const ProtobufCMessage*)message, out);
}
size_t room_configuration__pack_to_buffer
                     (const RoomConfiguration *message,
                      ProtobufCBuffer *buffer)
{
  assert(message->base.descriptor == &room_configuration__descriptor);
  return protobuf_c_message_pack_to_buffer ((const ProtobufCMessage*)message, buffer);
}
RoomConfiguration *
       room_configuration__unpack
                     (ProtobufCAllocator  *allocator,
                      size_t               len,
                      const uint8_t       *data)
{
  return (RoomConfiguration *)
     protobuf_c_message_unpack (&room_configuration__descriptor,
                                allocator, len, data);
}
void   room_configuration__free_unpacked
                     (RoomConfiguration *message,
                      ProtobufCAllocator *allocator)
{
  if(!message)
    return;
  assert(message->base.descriptor == &room_configuration__descriptor);
  protobuf_c_message_free_unpacked ((ProtobufCMessage*)message, allocator);
}
static const ProtobufCFieldDescriptor room_configuration__field_descriptors[5] =
{
  {
    "id",
    1,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_STRING,
    0,   /* quantifier_offset */
    offsetof(RoomConfiguration, id),
    NULL,
    &protobuf_c_empty_string,
    0,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
  {
    "expiry",
    2,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_UINT64,
    0,   /* quantifier_offset */
    offsetof(RoomConfiguration, expiry),
    NULL,
    NULL,
    0,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
  {
    "type",
    3,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_ENUM,
    0,   /* quantifier_offset */
    offsetof(RoomConfiguration, type),
    &room_type__descriptor,
    NULL,
    0,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
  {
    "plugins",
    4,
    PROTOBUF_C_LABEL_REPEATED,
    PROTOBUF_C_TYPE_STRING,
    offsetof(RoomConfiguration, n_plugins),
    offsetof(RoomConfiguration, plugins),
    NULL,
    &protobuf_c_empty_string,
    0,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
  {
    "name",
    5,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_STRING,
    0,   /* quantifier_offset */
    offsetof(RoomConfiguration, name),
    NULL,
    &protobuf_c_empty_string,
    0,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
};
static const unsigned room_configuration__field_indices_by_name[] = {
  1,   /* field[1] = expiry */
  0,   /* field[0] = id */
  4,   /* field[4] = name */
  3,   /* field[3] = plugins */
  2,   /* field[2] = type */
};
static const ProtobufCIntRange room_configuration__number_ranges[1 + 1] =
{
  { 1, 0 },
  { 0, 5 }
};
const ProtobufCMessageDescriptor room_configuration__descriptor =
{
  PROTOBUF_C__MESSAGE_DESCRIPTOR_MAGIC,
  "RoomConfiguration",
  "RoomConfiguration",
  "RoomConfiguration",
  "",
  sizeof(RoomConfiguration),
  5,
  room_configuration__field_descriptors,
  room_configuration__field_indices_by_name,
  1,  room_configuration__number_ranges,
  (ProtobufCMessageInit) room_configuration__init,
  NULL,NULL,NULL    /* reserved[123] */
};
static const ProtobufCEnumValue room_type__enum_values_by_number[3] =
{
  { "ROOM_TYPE_UNSPECIFIED", "ROOM_TYPE__ROOM_TYPE_UNSPECIFIED", 0 },
  { "STANDARD", "ROOM_TYPE__STANDARD", 1 },
  { "FREE", "ROOM_TYPE__FREE", 2 },
};
static const ProtobufCIntRange room_type__value_ranges[] = {
{0, 0},{0, 3}
};
static const ProtobufCEnumValueIndex room_type__enum_values_by_name[3] =
{
  { "FREE", 2 },
  { "ROOM_TYPE_UNSPECIFIED", 0 },
  { "STANDARD", 1 },
};
const ProtobufCEnumDescriptor room_type__descriptor =
{
  PROTOBUF_C__ENUM_DESCRIPTOR_MAGIC,
  "RoomType",
  "RoomType",
  "RoomType",
  "",
  3,
  room_type__enum_values_by_number,
  3,
  room_type__enum_values_by_name,
  1,
  room_type__value_ranges,
  NULL,NULL,NULL,NULL   /* reserved[1234] */
};
// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.31.0
// 	protoc        v4.23.4
// source: Message.proto

package pb

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type CloseCode int32

const (
	CloseCode_CLOSE_CODE_UNSPECIFIED           CloseCode = 0
	CloseCode_CLOSE_CODE_NORMAL                CloseCode = 1006
	CloseCode_CLOSE_CODE_UNAUTHORIZED          CloseCode = 4401
	CloseCode_CLOSE_CODE_NOTFOUND              CloseCode = 4404
	CloseCode_CLOSE_CODE_CLIENT_USER_REQUESTED CloseCode = 4100
)

// Enum value maps for CloseCode.
var (
	CloseCode_name = map[int32]string{
		0:    "CLOSE_CODE_UNSPECIFIED",
		1006: "CLOSE_CODE_NORMAL",
		4401: "CLOSE_CODE_UNAUTHORIZED",
		4404: "CLOSE_CODE_NOTFOUND",
		4100: "CLOSE_CODE_CLIENT_USER_REQUESTED",
	}
	CloseCode_value = map[string]int32{
		"CLOSE_CODE_UNSPECIFIED":           0,
		"CLOSE_CODE_NORMAL":                1006,
		"CLOSE_CODE_UNAUTHORIZED":          4401,
		"CLOSE_CODE_NOTFOUND":              4404,
		"CLOSE_CODE_CLIENT_USER_REQUESTED": 4100,
	}
)

func (x CloseCode) Enum() *CloseCode {
	p := new(CloseCode)
	*p = x
	return p
}

func (x CloseCode) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (CloseCode) Descriptor() protoreflect.EnumDescriptor {
	return file_Message_proto_enumTypes[0].Descriptor()
}

func (CloseCode) Type() protoreflect.EnumType {
	return &file_Message_proto_enumTypes[0]
}

func (x CloseCode) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use CloseCode.Descriptor instead.
func (CloseCode) EnumDescriptor() ([]byte, []int) {
	return file_Message_proto_rawDescGZIP(), []int{0}
}

type ClientMessageType int32

const (
	ClientMessageType_CLIENT_MESSAGE_UNSPECIFIED ClientMessageType = 0
	ClientMessageType_CLIENT_MESSAGE_NICKNAME    ClientMessageType = 1
	ClientMessageType_CLIENT_MESSAGE_MOUSEPOS    ClientMessageType = 2
)

// Enum value maps for ClientMessageType.
var (
	ClientMessageType_name = map[int32]string{
		0: "CLIENT_MESSAGE_UNSPECIFIED",
		1: "CLIENT_MESSAGE_NICKNAME",
		2: "CLIENT_MESSAGE_MOUSEPOS",
	}
	ClientMessageType_value = map[string]int32{
		"CLIENT_MESSAGE_UNSPECIFIED": 0,
		"CLIENT_MESSAGE_NICKNAME":    1,
		"CLIENT_MESSAGE_MOUSEPOS":    2,
	}
)

func (x ClientMessageType) Enum() *ClientMessageType {
	p := new(ClientMessageType)
	*p = x
	return p
}

func (x ClientMessageType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (ClientMessageType) Descriptor() protoreflect.EnumDescriptor {
	return file_Message_proto_enumTypes[1].Descriptor()
}

func (ClientMessageType) Type() protoreflect.EnumType {
	return &file_Message_proto_enumTypes[1]
}

func (x ClientMessageType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use ClientMessageType.Descriptor instead.
func (ClientMessageType) EnumDescriptor() ([]byte, []int) {
	return file_Message_proto_rawDescGZIP(), []int{1}
}

type ServerMessageType int32

const (
	ServerMessageType_SERVER_MESSAGE_UNSPECIFIED ServerMessageType = 0
	ServerMessageType_SERVER_MESSAGE_BROADCAST   ServerMessageType = 1
)

// Enum value maps for ServerMessageType.
var (
	ServerMessageType_name = map[int32]string{
		0: "SERVER_MESSAGE_UNSPECIFIED",
		1: "SERVER_MESSAGE_BROADCAST",
	}
	ServerMessageType_value = map[string]int32{
		"SERVER_MESSAGE_UNSPECIFIED": 0,
		"SERVER_MESSAGE_BROADCAST":   1,
	}
)

func (x ServerMessageType) Enum() *ServerMessageType {
	p := new(ServerMessageType)
	*p = x
	return p
}

func (x ServerMessageType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (ServerMessageType) Descriptor() protoreflect.EnumDescriptor {
	return file_Message_proto_enumTypes[2].Descriptor()
}

func (ServerMessageType) Type() protoreflect.EnumType {
	return &file_Message_proto_enumTypes[2]
}

func (x ServerMessageType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use ServerMessageType.Descriptor instead.
func (ServerMessageType) EnumDescriptor() ([]byte, []int) {
	return file_Message_proto_rawDescGZIP(), []int{2}
}

type ClientNickname struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Nickname string `protobuf:"bytes,1,opt,name=nickname,proto3" json:"nickname,omitempty"`
}

func (x *ClientNickname) Reset() {
	*x = ClientNickname{}
	if protoimpl.UnsafeEnabled {
		mi := &file_Message_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ClientNickname) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ClientNickname) ProtoMessage() {}

func (x *ClientNickname) ProtoReflect() protoreflect.Message {
	mi := &file_Message_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ClientNickname.ProtoReflect.Descriptor instead.
func (*ClientNickname) Descriptor() ([]byte, []int) {
	return file_Message_proto_rawDescGZIP(), []int{0}
}

func (x *ClientNickname) GetNickname() string {
	if x != nil {
		return x.Nickname
	}
	return ""
}

type ClientMousePos struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	X float64 `protobuf:"fixed64,1,opt,name=x,proto3" json:"x,omitempty"`
	Y float64 `protobuf:"fixed64,2,opt,name=y,proto3" json:"y,omitempty"`
}

func (x *ClientMousePos) Reset() {
	*x = ClientMousePos{}
	if protoimpl.UnsafeEnabled {
		mi := &file_Message_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ClientMousePos) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ClientMousePos) ProtoMessage() {}

func (x *ClientMousePos) ProtoReflect() protoreflect.Message {
	mi := &file_Message_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ClientMousePos.ProtoReflect.Descriptor instead.
func (*ClientMousePos) Descriptor() ([]byte, []int) {
	return file_Message_proto_rawDescGZIP(), []int{1}
}

func (x *ClientMousePos) GetX() float64 {
	if x != nil {
		return x.X
	}
	return 0
}

func (x *ClientMousePos) GetY() float64 {
	if x != nil {
		return x.Y
	}
	return 0
}

type ClientMessage struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Type ClientMessageType `protobuf:"varint,1,opt,name=type,proto3,enum=ClientMessageType" json:"type,omitempty"`
	// Types that are assignable to Message:
	//
	//	*ClientMessage_Nickname
	//	*ClientMessage_Mousepos
	Message isClientMessage_Message `protobuf_oneof:"message"`
}

func (x *ClientMessage) Reset() {
	*x = ClientMessage{}
	if protoimpl.UnsafeEnabled {
		mi := &file_Message_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ClientMessage) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ClientMessage) ProtoMessage() {}

func (x *ClientMessage) ProtoReflect() protoreflect.Message {
	mi := &file_Message_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ClientMessage.ProtoReflect.Descriptor instead.
func (*ClientMessage) Descriptor() ([]byte, []int) {
	return file_Message_proto_rawDescGZIP(), []int{2}
}

func (x *ClientMessage) GetType() ClientMessageType {
	if x != nil {
		return x.Type
	}
	return ClientMessageType_CLIENT_MESSAGE_UNSPECIFIED
}

func (m *ClientMessage) GetMessage() isClientMessage_Message {
	if m != nil {
		return m.Message
	}
	return nil
}

func (x *ClientMessage) GetNickname() *ClientNickname {
	if x, ok := x.GetMessage().(*ClientMessage_Nickname); ok {
		return x.Nickname
	}
	return nil
}

func (x *ClientMessage) GetMousepos() *ClientMousePos {
	if x, ok := x.GetMessage().(*ClientMessage_Mousepos); ok {
		return x.Mousepos
	}
	return nil
}

type isClientMessage_Message interface {
	isClientMessage_Message()
}

type ClientMessage_Nickname struct {
	Nickname *ClientNickname `protobuf:"bytes,2,opt,name=nickname,proto3,oneof"`
}

type ClientMessage_Mousepos struct {
	Mousepos *ClientMousePos `protobuf:"bytes,3,opt,name=mousepos,proto3,oneof"`
}

func (*ClientMessage_Nickname) isClientMessage_Message() {}

func (*ClientMessage_Mousepos) isClientMessage_Message() {}

type ServerBroadcast struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ClientIdent string         `protobuf:"bytes,1,opt,name=clientIdent,proto3" json:"clientIdent,omitempty"`
	Message     *ClientMessage `protobuf:"bytes,2,opt,name=message,proto3" json:"message,omitempty"`
}

func (x *ServerBroadcast) Reset() {
	*x = ServerBroadcast{}
	if protoimpl.UnsafeEnabled {
		mi := &file_Message_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ServerBroadcast) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ServerBroadcast) ProtoMessage() {}

func (x *ServerBroadcast) ProtoReflect() protoreflect.Message {
	mi := &file_Message_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ServerBroadcast.ProtoReflect.Descriptor instead.
func (*ServerBroadcast) Descriptor() ([]byte, []int) {
	return file_Message_proto_rawDescGZIP(), []int{3}
}

func (x *ServerBroadcast) GetClientIdent() string {
	if x != nil {
		return x.ClientIdent
	}
	return ""
}

func (x *ServerBroadcast) GetMessage() *ClientMessage {
	if x != nil {
		return x.Message
	}
	return nil
}

type ServerMessage struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Type ServerMessageType `protobuf:"varint,1,opt,name=type,proto3,enum=ServerMessageType" json:"type,omitempty"`
	// Types that are assignable to Message:
	//
	//	*ServerMessage_Broadcast
	Message isServerMessage_Message `protobuf_oneof:"message"`
}

func (x *ServerMessage) Reset() {
	*x = ServerMessage{}
	if protoimpl.UnsafeEnabled {
		mi := &file_Message_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ServerMessage) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ServerMessage) ProtoMessage() {}

func (x *ServerMessage) ProtoReflect() protoreflect.Message {
	mi := &file_Message_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ServerMessage.ProtoReflect.Descriptor instead.
func (*ServerMessage) Descriptor() ([]byte, []int) {
	return file_Message_proto_rawDescGZIP(), []int{4}
}

func (x *ServerMessage) GetType() ServerMessageType {
	if x != nil {
		return x.Type
	}
	return ServerMessageType_SERVER_MESSAGE_UNSPECIFIED
}

func (m *ServerMessage) GetMessage() isServerMessage_Message {
	if m != nil {
		return m.Message
	}
	return nil
}

func (x *ServerMessage) GetBroadcast() *ServerBroadcast {
	if x, ok := x.GetMessage().(*ServerMessage_Broadcast); ok {
		return x.Broadcast
	}
	return nil
}

type isServerMessage_Message interface {
	isServerMessage_Message()
}

type ServerMessage_Broadcast struct {
	Broadcast *ServerBroadcast `protobuf:"bytes,2,opt,name=broadcast,proto3,oneof"`
}

func (*ServerMessage_Broadcast) isServerMessage_Message() {}

var File_Message_proto protoreflect.FileDescriptor

var file_Message_proto_rawDesc = []byte{
	0x0a, 0x0d, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22,
	0x2c, 0x0a, 0x0e, 0x43, 0x6c, 0x69, 0x65, 0x6e, 0x74, 0x4e, 0x69, 0x63, 0x6b, 0x6e, 0x61, 0x6d,
	0x65, 0x12, 0x1a, 0x0a, 0x08, 0x6e, 0x69, 0x63, 0x6b, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x08, 0x6e, 0x69, 0x63, 0x6b, 0x6e, 0x61, 0x6d, 0x65, 0x22, 0x2c, 0x0a,
	0x0e, 0x43, 0x6c, 0x69, 0x65, 0x6e, 0x74, 0x4d, 0x6f, 0x75, 0x73, 0x65, 0x50, 0x6f, 0x73, 0x12,
	0x0c, 0x0a, 0x01, 0x78, 0x18, 0x01, 0x20, 0x01, 0x28, 0x01, 0x52, 0x01, 0x78, 0x12, 0x0c, 0x0a,
	0x01, 0x79, 0x18, 0x02, 0x20, 0x01, 0x28, 0x01, 0x52, 0x01, 0x79, 0x22, 0xa0, 0x01, 0x0a, 0x0d,
	0x43, 0x6c, 0x69, 0x65, 0x6e, 0x74, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x12, 0x26, 0x0a,
	0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x12, 0x2e, 0x43, 0x6c,
	0x69, 0x65, 0x6e, 0x74, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x54, 0x79, 0x70, 0x65, 0x52,
	0x04, 0x74, 0x79, 0x70, 0x65, 0x12, 0x2d, 0x0a, 0x08, 0x6e, 0x69, 0x63, 0x6b, 0x6e, 0x61, 0x6d,
	0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0f, 0x2e, 0x43, 0x6c, 0x69, 0x65, 0x6e, 0x74,
	0x4e, 0x69, 0x63, 0x6b, 0x6e, 0x61, 0x6d, 0x65, 0x48, 0x00, 0x52, 0x08, 0x6e, 0x69, 0x63, 0x6b,
	0x6e, 0x61, 0x6d, 0x65, 0x12, 0x2d, 0x0a, 0x08, 0x6d, 0x6f, 0x75, 0x73, 0x65, 0x70, 0x6f, 0x73,
	0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0f, 0x2e, 0x43, 0x6c, 0x69, 0x65, 0x6e, 0x74, 0x4d,
	0x6f, 0x75, 0x73, 0x65, 0x50, 0x6f, 0x73, 0x48, 0x00, 0x52, 0x08, 0x6d, 0x6f, 0x75, 0x73, 0x65,
	0x70, 0x6f, 0x73, 0x42, 0x09, 0x0a, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x22, 0x5d,
	0x0a, 0x0f, 0x53, 0x65, 0x72, 0x76, 0x65, 0x72, 0x42, 0x72, 0x6f, 0x61, 0x64, 0x63, 0x61, 0x73,
	0x74, 0x12, 0x20, 0x0a, 0x0b, 0x63, 0x6c, 0x69, 0x65, 0x6e, 0x74, 0x49, 0x64, 0x65, 0x6e, 0x74,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x63, 0x6c, 0x69, 0x65, 0x6e, 0x74, 0x49, 0x64,
	0x65, 0x6e, 0x74, 0x12, 0x28, 0x0a, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x0e, 0x2e, 0x43, 0x6c, 0x69, 0x65, 0x6e, 0x74, 0x4d, 0x65, 0x73,
	0x73, 0x61, 0x67, 0x65, 0x52, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x22, 0x74, 0x0a,
	0x0d, 0x53, 0x65, 0x72, 0x76, 0x65, 0x72, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x12, 0x26,
	0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x12, 0x2e, 0x53,
	0x65, 0x72, 0x76, 0x65, 0x72, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x54, 0x79, 0x70, 0x65,
	0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x12, 0x30, 0x0a, 0x09, 0x62, 0x72, 0x6f, 0x61, 0x64, 0x63,
	0x61, 0x73, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x10, 0x2e, 0x53, 0x65, 0x72, 0x76,
	0x65, 0x72, 0x42, 0x72, 0x6f, 0x61, 0x64, 0x63, 0x61, 0x73, 0x74, 0x48, 0x00, 0x52, 0x09, 0x62,
	0x72, 0x6f, 0x61, 0x64, 0x63, 0x61, 0x73, 0x74, 0x42, 0x09, 0x0a, 0x07, 0x6d, 0x65, 0x73, 0x73,
	0x61, 0x67, 0x65, 0x2a, 0x9e, 0x01, 0x0a, 0x09, 0x43, 0x6c, 0x6f, 0x73, 0x65, 0x43, 0x6f, 0x64,
	0x65, 0x12, 0x1a, 0x0a, 0x16, 0x43, 0x4c, 0x4f, 0x53, 0x45, 0x5f, 0x43, 0x4f, 0x44, 0x45, 0x5f,
	0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x16, 0x0a,
	0x11, 0x43, 0x4c, 0x4f, 0x53, 0x45, 0x5f, 0x43, 0x4f, 0x44, 0x45, 0x5f, 0x4e, 0x4f, 0x52, 0x4d,
	0x41, 0x4c, 0x10, 0xee, 0x07, 0x12, 0x1c, 0x0a, 0x17, 0x43, 0x4c, 0x4f, 0x53, 0x45, 0x5f, 0x43,
	0x4f, 0x44, 0x45, 0x5f, 0x55, 0x4e, 0x41, 0x55, 0x54, 0x48, 0x4f, 0x52, 0x49, 0x5a, 0x45, 0x44,
	0x10, 0xb1, 0x22, 0x12, 0x18, 0x0a, 0x13, 0x43, 0x4c, 0x4f, 0x53, 0x45, 0x5f, 0x43, 0x4f, 0x44,
	0x45, 0x5f, 0x4e, 0x4f, 0x54, 0x46, 0x4f, 0x55, 0x4e, 0x44, 0x10, 0xb4, 0x22, 0x12, 0x25, 0x0a,
	0x20, 0x43, 0x4c, 0x4f, 0x53, 0x45, 0x5f, 0x43, 0x4f, 0x44, 0x45, 0x5f, 0x43, 0x4c, 0x49, 0x45,
	0x4e, 0x54, 0x5f, 0x55, 0x53, 0x45, 0x52, 0x5f, 0x52, 0x45, 0x51, 0x55, 0x45, 0x53, 0x54, 0x45,
	0x44, 0x10, 0x84, 0x20, 0x2a, 0x6d, 0x0a, 0x11, 0x43, 0x6c, 0x69, 0x65, 0x6e, 0x74, 0x4d, 0x65,
	0x73, 0x73, 0x61, 0x67, 0x65, 0x54, 0x79, 0x70, 0x65, 0x12, 0x1e, 0x0a, 0x1a, 0x43, 0x4c, 0x49,
	0x45, 0x4e, 0x54, 0x5f, 0x4d, 0x45, 0x53, 0x53, 0x41, 0x47, 0x45, 0x5f, 0x55, 0x4e, 0x53, 0x50,
	0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x1b, 0x0a, 0x17, 0x43, 0x4c, 0x49,
	0x45, 0x4e, 0x54, 0x5f, 0x4d, 0x45, 0x53, 0x53, 0x41, 0x47, 0x45, 0x5f, 0x4e, 0x49, 0x43, 0x4b,
	0x4e, 0x41, 0x4d, 0x45, 0x10, 0x01, 0x12, 0x1b, 0x0a, 0x17, 0x43, 0x4c, 0x49, 0x45, 0x4e, 0x54,
	0x5f, 0x4d, 0x45, 0x53, 0x53, 0x41, 0x47, 0x45, 0x5f, 0x4d, 0x4f, 0x55, 0x53, 0x45, 0x50, 0x4f,
	0x53, 0x10, 0x02, 0x2a, 0x51, 0x0a, 0x11, 0x53, 0x65, 0x72, 0x76, 0x65, 0x72, 0x4d, 0x65, 0x73,
	0x73, 0x61, 0x67, 0x65, 0x54, 0x79, 0x70, 0x65, 0x12, 0x1e, 0x0a, 0x1a, 0x53, 0x45, 0x52, 0x56,
	0x45, 0x52, 0x5f, 0x4d, 0x45, 0x53, 0x53, 0x41, 0x47, 0x45, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45,
	0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x1c, 0x0a, 0x18, 0x53, 0x45, 0x52, 0x56,
	0x45, 0x52, 0x5f, 0x4d, 0x45, 0x53, 0x53, 0x41, 0x47, 0x45, 0x5f, 0x42, 0x52, 0x4f, 0x41, 0x44,
	0x43, 0x41, 0x53, 0x54, 0x10, 0x01, 0x42, 0x06, 0x5a, 0x04, 0x2e, 0x2f, 0x70, 0x62, 0x62, 0x06,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_Message_proto_rawDescOnce sync.Once
	file_Message_proto_rawDescData = file_Message_proto_rawDesc
)

func file_Message_proto_rawDescGZIP() []byte {
	file_Message_proto_rawDescOnce.Do(func() {
		file_Message_proto_rawDescData = protoimpl.X.CompressGZIP(file_Message_proto_rawDescData)
	})
	return file_Message_proto_rawDescData
}

var file_Message_proto_enumTypes = make([]protoimpl.EnumInfo, 3)
var file_Message_proto_msgTypes = make([]protoimpl.MessageInfo, 5)
var file_Message_proto_goTypes = []interface{}{
	(CloseCode)(0),          // 0: CloseCode
	(ClientMessageType)(0),  // 1: ClientMessageType
	(ServerMessageType)(0),  // 2: ServerMessageType
	(*ClientNickname)(nil),  // 3: ClientNickname
	(*ClientMousePos)(nil),  // 4: ClientMousePos
	(*ClientMessage)(nil),   // 5: ClientMessage
	(*ServerBroadcast)(nil), // 6: ServerBroadcast
	(*ServerMessage)(nil),   // 7: ServerMessage
}
var file_Message_proto_depIdxs = []int32{
	1, // 0: ClientMessage.type:type_name -> ClientMessageType
	3, // 1: ClientMessage.nickname:type_name -> ClientNickname
	4, // 2: ClientMessage.mousepos:type_name -> ClientMousePos
	5, // 3: ServerBroadcast.message:type_name -> ClientMessage
	2, // 4: ServerMessage.type:type_name -> ServerMessageType
	6, // 5: ServerMessage.broadcast:type_name -> ServerBroadcast
	6, // [6:6] is the sub-list for method output_type
	6, // [6:6] is the sub-list for method input_type
	6, // [6:6] is the sub-list for extension type_name
	6, // [6:6] is the sub-list for extension extendee
	0, // [0:6] is the sub-list for field type_name
}

func init() { file_Message_proto_init() }
func file_Message_proto_init() {
	if File_Message_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_Message_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ClientNickname); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_Message_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ClientMousePos); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_Message_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ClientMessage); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_Message_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ServerBroadcast); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_Message_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ServerMessage); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	file_Message_proto_msgTypes[2].OneofWrappers = []interface{}{
		(*ClientMessage_Nickname)(nil),
		(*ClientMessage_Mousepos)(nil),
	}
	file_Message_proto_msgTypes[4].OneofWrappers = []interface{}{
		(*ServerMessage_Broadcast)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_Message_proto_rawDesc,
			NumEnums:      3,
			NumMessages:   5,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_Message_proto_goTypes,
		DependencyIndexes: file_Message_proto_depIdxs,
		EnumInfos:         file_Message_proto_enumTypes,
		MessageInfos:      file_Message_proto_msgTypes,
	}.Build()
	File_Message_proto = out.File
	file_Message_proto_rawDesc = nil
	file_Message_proto_goTypes = nil
	file_Message_proto_depIdxs = nil
}

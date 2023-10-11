// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.30.0
// 	protoc        v4.23.4
// source: Client.proto

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

type ClientRole int32

const (
	ClientRole_CLIENT_ROLE_UNSPECIFIED ClientRole = 0
	ClientRole_GUEST                   ClientRole = 1
	ClientRole_ROOM_OWNER              ClientRole = 2
	ClientRole_SERVER_ADMIN            ClientRole = 3
)

// Enum value maps for ClientRole.
var (
	ClientRole_name = map[int32]string{
		0: "CLIENT_ROLE_UNSPECIFIED",
		1: "GUEST",
		2: "ROOM_OWNER",
		3: "SERVER_ADMIN",
	}
	ClientRole_value = map[string]int32{
		"CLIENT_ROLE_UNSPECIFIED": 0,
		"GUEST":                   1,
		"ROOM_OWNER":              2,
		"SERVER_ADMIN":            3,
	}
)

func (x ClientRole) Enum() *ClientRole {
	p := new(ClientRole)
	*p = x
	return p
}

func (x ClientRole) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (ClientRole) Descriptor() protoreflect.EnumDescriptor {
	return file_Client_proto_enumTypes[0].Descriptor()
}

func (ClientRole) Type() protoreflect.EnumType {
	return &file_Client_proto_enumTypes[0]
}

func (x ClientRole) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use ClientRole.Descriptor instead.
func (ClientRole) EnumDescriptor() ([]byte, []int) {
	return file_Client_proto_rawDescGZIP(), []int{0}
}

type ClientMessageType int32

const (
	ClientMessageType_CLIENT_MESSAGE_TYPE_UNSPECIFIED ClientMessageType = 0
	ClientMessageType_UPDATE_NICKNAME                 ClientMessageType = 1
	ClientMessageType_UPDATE_POINTERS                 ClientMessageType = 2
)

// Enum value maps for ClientMessageType.
var (
	ClientMessageType_name = map[int32]string{
		0: "CLIENT_MESSAGE_TYPE_UNSPECIFIED",
		1: "UPDATE_NICKNAME",
		2: "UPDATE_POINTERS",
	}
	ClientMessageType_value = map[string]int32{
		"CLIENT_MESSAGE_TYPE_UNSPECIFIED": 0,
		"UPDATE_NICKNAME":                 1,
		"UPDATE_POINTERS":                 2,
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
	return file_Client_proto_enumTypes[1].Descriptor()
}

func (ClientMessageType) Type() protoreflect.EnumType {
	return &file_Client_proto_enumTypes[1]
}

func (x ClientMessageType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use ClientMessageType.Descriptor instead.
func (ClientMessageType) EnumDescriptor() ([]byte, []int) {
	return file_Client_proto_rawDescGZIP(), []int{1}
}

type Client struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	UserId   string             `protobuf:"bytes,1,opt,name=userId,proto3" json:"userId,omitempty"`
	Role     ClientRole         `protobuf:"varint,4,opt,name=role,proto3,enum=ClientRole" json:"role,omitempty"`
	Nickname string             `protobuf:"bytes,2,opt,name=nickname,proto3" json:"nickname,omitempty"`
	Pointers *PointerCollection `protobuf:"bytes,3,opt,name=pointers,proto3" json:"pointers,omitempty"`
}

func (x *Client) Reset() {
	*x = Client{}
	if protoimpl.UnsafeEnabled {
		mi := &file_Client_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Client) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Client) ProtoMessage() {}

func (x *Client) ProtoReflect() protoreflect.Message {
	mi := &file_Client_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Client.ProtoReflect.Descriptor instead.
func (*Client) Descriptor() ([]byte, []int) {
	return file_Client_proto_rawDescGZIP(), []int{0}
}

func (x *Client) GetUserId() string {
	if x != nil {
		return x.UserId
	}
	return ""
}

func (x *Client) GetRole() ClientRole {
	if x != nil {
		return x.Role
	}
	return ClientRole_CLIENT_ROLE_UNSPECIFIED
}

func (x *Client) GetNickname() string {
	if x != nil {
		return x.Nickname
	}
	return ""
}

func (x *Client) GetPointers() *PointerCollection {
	if x != nil {
		return x.Pointers
	}
	return nil
}

type ClientMessage struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	UserId string            `protobuf:"bytes,1,opt,name=userId,proto3" json:"userId,omitempty"`
	Type   ClientMessageType `protobuf:"varint,2,opt,name=type,proto3,enum=ClientMessageType" json:"type,omitempty"`
	// Types that are assignable to Update:
	//
	//	*ClientMessage_Nickname
	//	*ClientMessage_Pointers
	Update isClientMessage_Update `protobuf_oneof:"update"`
}

func (x *ClientMessage) Reset() {
	*x = ClientMessage{}
	if protoimpl.UnsafeEnabled {
		mi := &file_Client_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ClientMessage) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ClientMessage) ProtoMessage() {}

func (x *ClientMessage) ProtoReflect() protoreflect.Message {
	mi := &file_Client_proto_msgTypes[1]
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
	return file_Client_proto_rawDescGZIP(), []int{1}
}

func (x *ClientMessage) GetUserId() string {
	if x != nil {
		return x.UserId
	}
	return ""
}

func (x *ClientMessage) GetType() ClientMessageType {
	if x != nil {
		return x.Type
	}
	return ClientMessageType_CLIENT_MESSAGE_TYPE_UNSPECIFIED
}

func (m *ClientMessage) GetUpdate() isClientMessage_Update {
	if m != nil {
		return m.Update
	}
	return nil
}

func (x *ClientMessage) GetNickname() string {
	if x, ok := x.GetUpdate().(*ClientMessage_Nickname); ok {
		return x.Nickname
	}
	return ""
}

func (x *ClientMessage) GetPointers() *PointerCollection {
	if x, ok := x.GetUpdate().(*ClientMessage_Pointers); ok {
		return x.Pointers
	}
	return nil
}

type isClientMessage_Update interface {
	isClientMessage_Update()
}

type ClientMessage_Nickname struct {
	Nickname string `protobuf:"bytes,3,opt,name=nickname,proto3,oneof"`
}

type ClientMessage_Pointers struct {
	Pointers *PointerCollection `protobuf:"bytes,4,opt,name=pointers,proto3,oneof"`
}

func (*ClientMessage_Nickname) isClientMessage_Update() {}

func (*ClientMessage_Pointers) isClientMessage_Update() {}

var File_Client_proto protoreflect.FileDescriptor

var file_Client_proto_rawDesc = []byte{
	0x0a, 0x0c, 0x43, 0x6c, 0x69, 0x65, 0x6e, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x0d,
	0x50, 0x6f, 0x69, 0x6e, 0x74, 0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x8d, 0x01,
	0x0a, 0x06, 0x43, 0x6c, 0x69, 0x65, 0x6e, 0x74, 0x12, 0x16, 0x0a, 0x06, 0x75, 0x73, 0x65, 0x72,
	0x49, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x75, 0x73, 0x65, 0x72, 0x49, 0x64,
	0x12, 0x1f, 0x0a, 0x04, 0x72, 0x6f, 0x6c, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x0b,
	0x2e, 0x43, 0x6c, 0x69, 0x65, 0x6e, 0x74, 0x52, 0x6f, 0x6c, 0x65, 0x52, 0x04, 0x72, 0x6f, 0x6c,
	0x65, 0x12, 0x1a, 0x0a, 0x08, 0x6e, 0x69, 0x63, 0x6b, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x08, 0x6e, 0x69, 0x63, 0x6b, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x2e, 0x0a,
	0x08, 0x70, 0x6f, 0x69, 0x6e, 0x74, 0x65, 0x72, 0x73, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x12, 0x2e, 0x50, 0x6f, 0x69, 0x6e, 0x74, 0x65, 0x72, 0x43, 0x6f, 0x6c, 0x6c, 0x65, 0x63, 0x74,
	0x69, 0x6f, 0x6e, 0x52, 0x08, 0x70, 0x6f, 0x69, 0x6e, 0x74, 0x65, 0x72, 0x73, 0x22, 0xa9, 0x01,
	0x0a, 0x0d, 0x43, 0x6c, 0x69, 0x65, 0x6e, 0x74, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x12,
	0x16, 0x0a, 0x06, 0x75, 0x73, 0x65, 0x72, 0x49, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x06, 0x75, 0x73, 0x65, 0x72, 0x49, 0x64, 0x12, 0x26, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x12, 0x2e, 0x43, 0x6c, 0x69, 0x65, 0x6e, 0x74, 0x4d, 0x65,
	0x73, 0x73, 0x61, 0x67, 0x65, 0x54, 0x79, 0x70, 0x65, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x12,
	0x1c, 0x0a, 0x08, 0x6e, 0x69, 0x63, 0x6b, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28,
	0x09, 0x48, 0x00, 0x52, 0x08, 0x6e, 0x69, 0x63, 0x6b, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x30, 0x0a,
	0x08, 0x70, 0x6f, 0x69, 0x6e, 0x74, 0x65, 0x72, 0x73, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x12, 0x2e, 0x50, 0x6f, 0x69, 0x6e, 0x74, 0x65, 0x72, 0x43, 0x6f, 0x6c, 0x6c, 0x65, 0x63, 0x74,
	0x69, 0x6f, 0x6e, 0x48, 0x00, 0x52, 0x08, 0x70, 0x6f, 0x69, 0x6e, 0x74, 0x65, 0x72, 0x73, 0x42,
	0x08, 0x0a, 0x06, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x2a, 0x56, 0x0a, 0x0a, 0x43, 0x6c, 0x69,
	0x65, 0x6e, 0x74, 0x52, 0x6f, 0x6c, 0x65, 0x12, 0x1b, 0x0a, 0x17, 0x43, 0x4c, 0x49, 0x45, 0x4e,
	0x54, 0x5f, 0x52, 0x4f, 0x4c, 0x45, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49,
	0x45, 0x44, 0x10, 0x00, 0x12, 0x09, 0x0a, 0x05, 0x47, 0x55, 0x45, 0x53, 0x54, 0x10, 0x01, 0x12,
	0x0e, 0x0a, 0x0a, 0x52, 0x4f, 0x4f, 0x4d, 0x5f, 0x4f, 0x57, 0x4e, 0x45, 0x52, 0x10, 0x02, 0x12,
	0x10, 0x0a, 0x0c, 0x53, 0x45, 0x52, 0x56, 0x45, 0x52, 0x5f, 0x41, 0x44, 0x4d, 0x49, 0x4e, 0x10,
	0x03, 0x2a, 0x62, 0x0a, 0x11, 0x43, 0x6c, 0x69, 0x65, 0x6e, 0x74, 0x4d, 0x65, 0x73, 0x73, 0x61,
	0x67, 0x65, 0x54, 0x79, 0x70, 0x65, 0x12, 0x23, 0x0a, 0x1f, 0x43, 0x4c, 0x49, 0x45, 0x4e, 0x54,
	0x5f, 0x4d, 0x45, 0x53, 0x53, 0x41, 0x47, 0x45, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x55, 0x4e,
	0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x13, 0x0a, 0x0f, 0x55,
	0x50, 0x44, 0x41, 0x54, 0x45, 0x5f, 0x4e, 0x49, 0x43, 0x4b, 0x4e, 0x41, 0x4d, 0x45, 0x10, 0x01,
	0x12, 0x13, 0x0a, 0x0f, 0x55, 0x50, 0x44, 0x41, 0x54, 0x45, 0x5f, 0x50, 0x4f, 0x49, 0x4e, 0x54,
	0x45, 0x52, 0x53, 0x10, 0x02, 0x42, 0x06, 0x5a, 0x04, 0x2e, 0x2f, 0x70, 0x62, 0x62, 0x06, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_Client_proto_rawDescOnce sync.Once
	file_Client_proto_rawDescData = file_Client_proto_rawDesc
)

func file_Client_proto_rawDescGZIP() []byte {
	file_Client_proto_rawDescOnce.Do(func() {
		file_Client_proto_rawDescData = protoimpl.X.CompressGZIP(file_Client_proto_rawDescData)
	})
	return file_Client_proto_rawDescData
}

var file_Client_proto_enumTypes = make([]protoimpl.EnumInfo, 2)
var file_Client_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_Client_proto_goTypes = []interface{}{
	(ClientRole)(0),           // 0: ClientRole
	(ClientMessageType)(0),    // 1: ClientMessageType
	(*Client)(nil),            // 2: Client
	(*ClientMessage)(nil),     // 3: ClientMessage
	(*PointerCollection)(nil), // 4: PointerCollection
}
var file_Client_proto_depIdxs = []int32{
	0, // 0: Client.role:type_name -> ClientRole
	4, // 1: Client.pointers:type_name -> PointerCollection
	1, // 2: ClientMessage.type:type_name -> ClientMessageType
	4, // 3: ClientMessage.pointers:type_name -> PointerCollection
	4, // [4:4] is the sub-list for method output_type
	4, // [4:4] is the sub-list for method input_type
	4, // [4:4] is the sub-list for extension type_name
	4, // [4:4] is the sub-list for extension extendee
	0, // [0:4] is the sub-list for field type_name
}

func init() { file_Client_proto_init() }
func file_Client_proto_init() {
	if File_Client_proto != nil {
		return
	}
	file_Pointer_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_Client_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Client); i {
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
		file_Client_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
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
	}
	file_Client_proto_msgTypes[1].OneofWrappers = []interface{}{
		(*ClientMessage_Nickname)(nil),
		(*ClientMessage_Pointers)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_Client_proto_rawDesc,
			NumEnums:      2,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_Client_proto_goTypes,
		DependencyIndexes: file_Client_proto_depIdxs,
		EnumInfos:         file_Client_proto_enumTypes,
		MessageInfos:      file_Client_proto_msgTypes,
	}.Build()
	File_Client_proto = out.File
	file_Client_proto_rawDesc = nil
	file_Client_proto_goTypes = nil
	file_Client_proto_depIdxs = nil
}

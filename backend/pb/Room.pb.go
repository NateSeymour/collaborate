// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.30.0
// 	protoc        v4.23.4
// source: Room.proto

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

type RoomType int32

const (
	RoomType_ROOM_TYPE_UNSPECIFIED RoomType = 0
	RoomType_ROOM_TYPE_STANDARD    RoomType = 1
	RoomType_ROOM_TYPE_LOBBY       RoomType = 2
)

// Enum value maps for RoomType.
var (
	RoomType_name = map[int32]string{
		0: "ROOM_TYPE_UNSPECIFIED",
		1: "ROOM_TYPE_STANDARD",
		2: "ROOM_TYPE_LOBBY",
	}
	RoomType_value = map[string]int32{
		"ROOM_TYPE_UNSPECIFIED": 0,
		"ROOM_TYPE_STANDARD":    1,
		"ROOM_TYPE_LOBBY":       2,
	}
)

func (x RoomType) Enum() *RoomType {
	p := new(RoomType)
	*p = x
	return p
}

func (x RoomType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (RoomType) Descriptor() protoreflect.EnumDescriptor {
	return file_Room_proto_enumTypes[0].Descriptor()
}

func (RoomType) Type() protoreflect.EnumType {
	return &file_Room_proto_enumTypes[0]
}

func (x RoomType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use RoomType.Descriptor instead.
func (RoomType) EnumDescriptor() ([]byte, []int) {
	return file_Room_proto_rawDescGZIP(), []int{0}
}

type Room struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Type   RoomType `protobuf:"varint,3,opt,name=type,proto3,enum=RoomType" json:"type,omitempty"`
	Id     string   `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Expiry uint64   `protobuf:"varint,2,opt,name=expiry,proto3" json:"expiry,omitempty"`
}

func (x *Room) Reset() {
	*x = Room{}
	if protoimpl.UnsafeEnabled {
		mi := &file_Room_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Room) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Room) ProtoMessage() {}

func (x *Room) ProtoReflect() protoreflect.Message {
	mi := &file_Room_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Room.ProtoReflect.Descriptor instead.
func (*Room) Descriptor() ([]byte, []int) {
	return file_Room_proto_rawDescGZIP(), []int{0}
}

func (x *Room) GetType() RoomType {
	if x != nil {
		return x.Type
	}
	return RoomType_ROOM_TYPE_UNSPECIFIED
}

func (x *Room) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Room) GetExpiry() uint64 {
	if x != nil {
		return x.Expiry
	}
	return 0
}

var File_Room_proto protoreflect.FileDescriptor

var file_Room_proto_rawDesc = []byte{
	0x0a, 0x0a, 0x52, 0x6f, 0x6f, 0x6d, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x4d, 0x0a, 0x04,
	0x52, 0x6f, 0x6f, 0x6d, 0x12, 0x1d, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x03, 0x20, 0x01,
	0x28, 0x0e, 0x32, 0x09, 0x2e, 0x52, 0x6f, 0x6f, 0x6d, 0x54, 0x79, 0x70, 0x65, 0x52, 0x04, 0x74,
	0x79, 0x70, 0x65, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x02, 0x69, 0x64, 0x12, 0x16, 0x0a, 0x06, 0x65, 0x78, 0x70, 0x69, 0x72, 0x79, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x04, 0x52, 0x06, 0x65, 0x78, 0x70, 0x69, 0x72, 0x79, 0x2a, 0x52, 0x0a, 0x08, 0x52,
	0x6f, 0x6f, 0x6d, 0x54, 0x79, 0x70, 0x65, 0x12, 0x19, 0x0a, 0x15, 0x52, 0x4f, 0x4f, 0x4d, 0x5f,
	0x54, 0x59, 0x50, 0x45, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44,
	0x10, 0x00, 0x12, 0x16, 0x0a, 0x12, 0x52, 0x4f, 0x4f, 0x4d, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f,
	0x53, 0x54, 0x41, 0x4e, 0x44, 0x41, 0x52, 0x44, 0x10, 0x01, 0x12, 0x13, 0x0a, 0x0f, 0x52, 0x4f,
	0x4f, 0x4d, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x4c, 0x4f, 0x42, 0x42, 0x59, 0x10, 0x02, 0x42,
	0x06, 0x5a, 0x04, 0x2e, 0x2f, 0x70, 0x62, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_Room_proto_rawDescOnce sync.Once
	file_Room_proto_rawDescData = file_Room_proto_rawDesc
)

func file_Room_proto_rawDescGZIP() []byte {
	file_Room_proto_rawDescOnce.Do(func() {
		file_Room_proto_rawDescData = protoimpl.X.CompressGZIP(file_Room_proto_rawDescData)
	})
	return file_Room_proto_rawDescData
}

var file_Room_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_Room_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_Room_proto_goTypes = []interface{}{
	(RoomType)(0), // 0: RoomType
	(*Room)(nil),  // 1: Room
}
var file_Room_proto_depIdxs = []int32{
	0, // 0: Room.type:type_name -> RoomType
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_Room_proto_init() }
func file_Room_proto_init() {
	if File_Room_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_Room_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Room); i {
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
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_Room_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_Room_proto_goTypes,
		DependencyIndexes: file_Room_proto_depIdxs,
		EnumInfos:         file_Room_proto_enumTypes,
		MessageInfos:      file_Room_proto_msgTypes,
	}.Build()
	File_Room_proto = out.File
	file_Room_proto_rawDesc = nil
	file_Room_proto_goTypes = nil
	file_Room_proto_depIdxs = nil
}

SOURCES=Message.proto

go: $(SOURCES)
	protoc -I=. --go_out=./go $(SOURCES)

typescript: $(SOURCES)
	protoc -I=. --plugin=../node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./typescript $(SOURCES)

all: go typescript
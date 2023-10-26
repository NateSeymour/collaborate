PB_SOURCES=Client.proto \
	CommonTypes.proto  \
	Connection.proto \
	Pointer.proto \
	RoomConfiguration.proto \
	Server.proto \
	User.proto

OUT_DIR=./bin

output-dir: $(OUT_DIR)
	mkdir -p $(OUT_DIR)

frontend-workspace:
	npm --prefix ./frontend install

pb-go:
	rm -rf ./backend/pb
	protoc -I=./proto --go_out=./backend $(PB_SOURCES)

pb-ts: frontend-workspace
	rm -rf ./frontend/pb/*.ts
	protoc -I=./proto --plugin=./frontend/node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./frontend/pb \
 		--ts_proto_opt=forceLong=Long \
        --ts_proto_opt=useDate=true \
        --ts_proto_opt=env=browser \
        --ts_proto_opt=esModuleInterop=true \
        $(PB_SOURCES)

pb-c:
	rm -rf ./av/src/pb/*
	protoc -I=./proto --c_out=./av/src/pb $(PB_SOURCES)

pb: pb-go pb-ts pb-c

webapp: pb-ts output-dir
	npm --prefix ./frontend/webapp run lint:fix
	npm --prefix ./frontend/webapp run build
	cp -r ./frontend/webapp/dist/ ./bin/frontend

backend: pb-go output-dir
	go build -C ./backend -o ../$(OUT_DIR)

all: webapp backend

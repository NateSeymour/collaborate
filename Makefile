PB_SOURCES=proto/Message.proto
OUT_DIR=./bin

output-dir: $(OUT_DIR)
	mkdir -p $(OUT_DIR)

frontend-workspace:
	npm --prefix ./frontend install

pb-go: $(PB_SOURCES)
	protoc -I=. --go_out=./backend $(PB_SOURCES)

pb-ts: frontend-workspace $(PB_SOURCES)
	protoc -I=. --plugin=./frontend/node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./frontend/collab-proto $(PB_SOURCES)

webapp: pb-ts output-dir
	npm --prefix ./frontend/webapp run lint:fix
	npm --prefix ./frontend/webapp run build
	cp -r ./frontend/webapp/dist ./bin/frontend

backend: pb-go output-dir
	go build -C ./backend -o ../$(OUT_DIR)

all: webapp backend

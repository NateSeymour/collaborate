package util

import (
	"github.com/NateSeymour/collaborate/backend/pb"
	"github.com/gorilla/websocket"
	"time"
)

func CloseWebsocketConnection(conn *websocket.Conn, code pb.CloseCode) {
	conn.WriteControl(websocket.CloseMessage, websocket.FormatCloseMessage(int(code), code.String()), time.Now().Add(time.Minute))
	conn.Close()
}

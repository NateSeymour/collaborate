package room

import (
	"github.com/NateSeymour/collaborate/backend/pb"
	"github.com/golang/protobuf/proto"
	"github.com/gorilla/websocket"
)

type Client struct {
	Conn  *websocket.Conn
	Room  *Room
	Ident string
}

func (c *Client) ClientHandler() {
	defer c.Conn.Close()

	for {
		mtype, m, err := c.Conn.ReadMessage()

		if err != nil || mtype == websocket.CloseMessage {
			c.Room.disconnect <- c
			return
		}

		clientMessage := &pb.ClientMessage{}
		_ = proto.Unmarshal(m, clientMessage)

		c.Room.message <- SocketMessage{
			client: c,
			data:   clientMessage,
		}
	}
}

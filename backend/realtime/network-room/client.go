package network_room

import (
	"github.com/NateSeymour/collaborate/backend/pb"
	"github.com/golang/protobuf/proto"
	"github.com/gorilla/websocket"
)

type NetworkClient struct {
	Conn *websocket.Conn
	Room *NetworkRoom
	User *pb.User
}

func (c *NetworkClient) ClientHandler() {
	defer c.Conn.Close()

	for {
		mtype, data, err := c.Conn.ReadMessage()

		if err != nil || mtype == websocket.CloseMessage {
			c.Room.Disconnect <- c
			return
		}

		message := &pb.ClientMessage{}
		proto.Unmarshal(data, message)

		c.Room.Data <- SocketData{
			client: c,
			data:   message,
		}
	}
}

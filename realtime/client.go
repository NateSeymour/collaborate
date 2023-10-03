package main

import (
	"github.com/NateSeymour/collaborate/typings/pb"
	"github.com/golang/protobuf/proto"
	"github.com/gorilla/websocket"
)

type Client struct {
	conn  *websocket.Conn
	room  *Room
	ident string
}

func (c *Client) ClientHandler() {
	defer c.conn.Close()

	for {
		mtype, m, err := c.conn.ReadMessage()

		if err != nil || mtype == websocket.CloseMessage {
			c.room.disconnect <- c
			return
		}

		clientMessage := &pb.ClientMessage{}
		_ = proto.Unmarshal(m, clientMessage)

		c.room.message <- SocketMessage{
			client: c,
			data:   clientMessage,
		}
	}
}

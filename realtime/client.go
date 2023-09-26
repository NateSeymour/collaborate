package main

import (
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

		c.room.message <- ClientMessage{
			client: c,
			data:   m,
		}
	}
}

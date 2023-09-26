package main

import (
	"fmt"
	"time"

	"github.com/gorilla/websocket"
)

type ClientMessage struct {
	client *Client
	data   []byte
}

type Room struct {
	clients map[*websocket.Conn]*Client

	connect    chan *Client
	disconnect chan *Client
	message    chan ClientMessage
}

func (r *Room) RoomHandler() {
	roomExpiry := time.After(24 * time.Hour)
	for {
		select {
		case <-roomExpiry:
			fmt.Println("Room has expired!")
		case client := <-r.disconnect:
			delete(r.clients, client.conn)

			fmt.Println("A client has disconnected!")
		case client := <-r.connect:
			r.clients[client.conn] = client
			go client.ClientHandler()

			fmt.Println("A new client has connected!")
		case msg := <-r.message:
			fmt.Println(string(msg.data))
		}
	}
}

func NewRoom() *Room {
	room := new(Room)

	room.clients = make(map[*websocket.Conn]*Client)
	room.connect = make(chan *Client)
	room.disconnect = make(chan *Client)
	room.message = make(chan ClientMessage)

	go room.RoomHandler()

	return room
}

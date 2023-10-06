package room

import (
	"fmt"
	"github.com/NateSeymour/collaborate/backend/pb"
	"github.com/golang/protobuf/proto"
	"time"

	"github.com/gorilla/websocket"
)

type SocketMessage struct {
	client *Client
	data   *pb.ClientMessage
}

type Room struct {
	clients map[*websocket.Conn]*Client

	Connect    chan *Client
	disconnect chan *Client
	message    chan SocketMessage
}

var RoomStore = map[string]*Room{}

func (r *Room) RoomHandler() {
	roomExpiry := time.After(24 * time.Hour)
	for {
		select {
		case <-roomExpiry:
			fmt.Println("Room has expired!")
		case client := <-r.disconnect:
			fmt.Printf("[Room] A client with the identifier %s has disconnected.\n", client.Ident)

			delete(r.clients, client.Conn)
		case client := <-r.Connect:
			r.clients[client.Conn] = client
			go client.ClientHandler()

			fmt.Printf("[Room] A client with the identifier %s has connected.\n", client.Ident)
		case msg := <-r.message:
			// Process message
			switch msg.data.Type {
			case pb.ClientMessageType_CLIENT_MESSAGE_MOUSEPOS:
				mousePos := msg.data.GetMousepos()
				fmt.Printf("[Client(%s)] MousePos(%f, %f)\n", msg.client.Ident, mousePos.X, mousePos.Y)
			}

			// Broadcast message
			r.Broadcast(&msg)
		}
	}
}

func (r *Room) Broadcast(msg *SocketMessage) {
	serverMessage := &pb.ServerMessage{
		Type: pb.ServerMessageType_SERVER_MESSAGE_BROADCAST,
		Message: &pb.ServerMessage_Broadcast{
			Broadcast: &pb.ServerBroadcast{
				ClientIdent: msg.client.Ident,
				Message:     msg.data,
			},
		},
	}
	out, _ := proto.Marshal(serverMessage)

	for conn, client := range r.clients {
		if client != msg.client {
			_ = conn.WriteMessage(websocket.BinaryMessage, out)
		}
	}
}

func NewRoom() *Room {
	room := new(Room)

	room.clients = make(map[*websocket.Conn]*Client)
	room.Connect = make(chan *Client)
	room.disconnect = make(chan *Client)
	room.message = make(chan SocketMessage)

	go room.RoomHandler()

	return room
}

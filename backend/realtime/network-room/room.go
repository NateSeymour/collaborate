package network_room

import (
	"fmt"
	"github.com/NateSeymour/collaborate/backend/pb"
	"github.com/NateSeymour/collaborate/backend/util"
	"github.com/golang/protobuf/proto"
	"github.com/gorilla/websocket"
	"time"
)

type SocketData struct {
	client *NetworkClient
	data   *pb.ClientMessage
}

type NetworkRoom struct {
	Clients map[*websocket.Conn]*NetworkClient

	Connect    chan *NetworkClient
	Disconnect chan *NetworkClient
	Data       chan SocketData

	Room *pb.Room
}

var Store = map[string]*NetworkRoom{}

func (r *NetworkRoom) RoomHandler() {
	roomExpiry := time.After(24 * time.Hour)
	pingTimer := time.Tick(30 * time.Second)
	for {
		select {
		case <-roomExpiry:
			fmt.Printf("[NetworkRoom] %s has expired! Closing connections to %d client(s).\n", r.Room.Id, len(r.Clients))

			// Close all client connections.
			for conn := range r.Clients {
				util.CloseWebsocketConnection(conn, pb.CloseCode_CLOSE_CODE_ROOM_EXPIRED)
			}

			// Delete Room info
			delete(Store, r.Room.Id)

			return
		case <-pingTimer:
			// Ping Clients to keep connections alive
			for conn := range r.Clients {
				conn.WriteControl(websocket.PingMessage, nil, time.Now().Add(time.Minute))
			}
		case client := <-r.Disconnect:
			fmt.Printf("[NetworkRoom] A client with the identifier %s has disconnected.\n", client.User.Id)

			delete(r.Clients, client.Conn)
		case client := <-r.Connect:
			r.Clients[client.Conn] = client
			go client.ClientHandler()

			fmt.Printf("[NetworkRoom] A client with the identifier %s has connected.\n", client.User.Id)
		case msg := <-r.Data:
			r.Broadcast(&msg)
		}
	}
}

func (r *NetworkRoom) Broadcast(msg *SocketData) {
	// Set proper ID
	msg.data.UserId = msg.client.User.Id

	serverMessage := &pb.ServerMessage{
		Type: pb.ServerMessageType_RELAY,
		Message: &pb.ServerMessage_Relay{
			Relay: msg.data,
		},
	}
	out, _ := proto.Marshal(serverMessage)

	for conn, client := range r.Clients {
		if client != msg.client {
			_ = conn.WriteMessage(websocket.BinaryMessage, out)
		}
	}
}

func New(room *pb.Room) *NetworkRoom {
	networkRoom := &NetworkRoom{
		Clients:    make(map[*websocket.Conn]*NetworkClient),
		Connect:    make(chan *NetworkClient),
		Disconnect: make(chan *NetworkClient),
		Data:       make(chan SocketData),
		Room:       room,
	}

	go networkRoom.RoomHandler()

	return networkRoom
}

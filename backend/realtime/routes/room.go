package routes

import (
	"github.com/NateSeymour/collaborate/backend/pb"
	"github.com/NateSeymour/collaborate/backend/realtime/network-room"
	"github.com/NateSeymour/collaborate/backend/signing"
	"github.com/NateSeymour/collaborate/backend/util"
	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
	"github.com/gorilla/websocket"
	"log"
	"net/http"
)

var websocketUpgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

func GetRoom(c *gin.Context) {
	// Upgrade connection
	conn, err := websocketUpgrader.Upgrade(c.Writer, c.Request, nil)
	if err != nil {
		log.Println(err.Error())
		c.Status(http.StatusInternalServerError)
		return
	}

	// Get user
	userValue, hasUser := c.Get("User")
	if !hasUser {
		util.CloseWebsocketConnection(conn, pb.CloseCode_CLOSE_CODE_UNAUTHORIZED)
		return
	}

	user := userValue.(*pb.User)

	// NetworkRoom status
	roomId := c.Param("id")
	_, roomExists := network_room.Store[roomId]
	if !roomExists {
		// Get NetworkRoom Creation Token
		creationToken, creationErr := c.Request.Cookie("RoomCreationToken")
		if creationErr != nil {
			util.CloseWebsocketConnection(conn, pb.CloseCode_CLOSE_CODE_UNAUTHORIZED)
			return
		}

		token, _ := jwt.ParseWithClaims(creationToken.Value, &signing.RoomCreationToken{}, signing.JwtKeyFunc)
		if claims, ok := token.Claims.(*signing.RoomCreationToken); ok && token.Valid {
			if claims.RoomConfiguration.Id != roomId {
				util.CloseWebsocketConnection(conn, pb.CloseCode_CLOSE_CODE_UNAUTHORIZED)
				return
			}

			network_room.Store[roomId] = network_room.New(claims.RoomConfiguration)
		} else {
			util.CloseWebsocketConnection(conn, pb.CloseCode_CLOSE_CODE_NOTFOUND)
			return
		}
	}

	requestedRoom := network_room.Store[roomId]

	// Register new client
	requestedRoom.Connect <- &network_room.NetworkClient{conn, requestedRoom, user}
}

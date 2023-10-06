package realtime

import (
	"fmt"
	"github.com/NateSeymour/collaborate/realtime/room"
	"github.com/NateSeymour/collaborate/util"
	"github.com/gin-gonic/gin"
	"github.com/gorilla/websocket"
	"net/http"
	"time"
)

var websocketUpgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

func getGuestAccess(c *gin.Context) {
	roomId := c.Param("roomId")
	_, roomExists := room.RoomStore[roomId]
	if !roomExists {
		c.AbortWithStatus(http.StatusNotFound)
		return
	}

	c.SetCookie("Ident", util.GenerateSecureId(), 3600, fmt.Sprintf("/api/realtime/room/%s", roomId), "localhost:8080", true, true)
	c.Status(http.StatusOK)
}

func getRoom(c *gin.Context) {
	// Upgrade connection
	conn, err := websocketUpgrader.Upgrade(c.Writer, c.Request, nil)
	if err != nil {
		fmt.Print(err.Error())
		c.Status(http.StatusInternalServerError)
		return
	}

	// Room status
	roomId := c.Param("roomId")
	_, roomExists := room.RoomStore[roomId]
	if !roomExists {
		// Get Room Creation Token
		creationToken, creationErr := c.Request.Cookie("RoomCreationToken")
		if creationErr != nil {
			conn.WriteControl(websocket.CloseMessage, websocket.FormatCloseMessage(4404, "NotFound: Missing Token."), time.Now().Add(time.Minute))
			conn.Close()
			return
		}

		parsedToken, tokenErr := jwt.Parse(creationToken.Value, func(token *jwt.Token) (interface{}, error) {
			return util.GetHMACSecret()
		})
		if tokenErr != nil {
			conn.WriteControl(websocket.CloseMessage, websocket.FormatCloseMessage(4404, "NotFound: Invalid Token."), time.Now().Add(time.Minute))
			conn.Close()
			return
		}

		claims, _ := parsedToken.Claims.(jwt.MapClaims)
		if claims["roomId"] != roomId {
			conn.WriteControl(websocket.CloseMessage, websocket.FormatCloseMessage(4404, "NotFound: Wrong Room."), time.Now().Add(time.Minute))
			conn.Close()
			return
		}

		room.RoomStore[roomId] = room.NewRoom()
	}

	requestedRoom := room.RoomStore[roomId]

	// Enforce id
	ident, identErr := c.Request.Cookie("Ident")
	if identErr != nil {
		conn.WriteControl(websocket.CloseMessage, websocket.FormatCloseMessage(4401, "Unauthorized"), time.Now().Add(time.Minute))
		conn.Close()
		return
	}

	// Register new client
	requestedRoom.Connect <- &room.Client{conn, requestedRoom, ident.Value}
}

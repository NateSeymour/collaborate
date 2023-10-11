package routes

import (
	"fmt"
	"github.com/NateSeymour/collaborate/backend/config"
	"github.com/NateSeymour/collaborate/backend/pb"
	"github.com/NateSeymour/collaborate/backend/signing"
	"github.com/NateSeymour/collaborate/backend/util"
	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
	"net/http"
	"time"
)

func CreateRoom(c *gin.Context) {
	// Create Room info
	room := &pb.Room{
		Type:   pb.RoomType_ROOM_TYPE_STANDARD,
		Id:     util.GenerateSecureId(20),
		Expiry: uint64(time.Now().Add(24 * time.Hour).Unix()),
	}

	// Create Owner token
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, signing.RoomCreationToken{
		Room:             room,
		RegisteredClaims: jwt.RegisteredClaims{},
	})
	secret, _ := signing.GetHMACSecret()
	roomCreationTokenString, _ := token.SignedString(secret)

	c.SetCookie("RoomCreationToken", roomCreationTokenString, 24*60*60, fmt.Sprintf("/api/realtime/network-room/%s", room.Id), config.ApplicationRuntimeConfig.Hostname, true, true)

	c.JSON(http.StatusOK, room)
}

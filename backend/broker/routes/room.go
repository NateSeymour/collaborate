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

type CreateRoomRequest struct {
	Name             string   `json:"name" binding:"required"`
	RequestedPlugins []string `json:"requestedPlugins" binding:"required"`
}

func CreateRoom(c *gin.Context) {
	body := &CreateRoomRequest{}
	bodyErr := c.BindJSON(body)
	if bodyErr != nil {
		c.AbortWithStatus(http.StatusBadRequest)
		return
	}

	// Create Configuration info
	roomConfiguration := &pb.RoomConfiguration{
		Name:    body.Name,
		Type:    pb.RoomType_STANDARD,
		Id:      util.GenerateSecureId(20),
		Expiry:  uint64(time.Now().Add(24 * time.Hour).Unix()),
		Plugins: body.RequestedPlugins,
	}

	// Create Owner token
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, signing.RoomCreationToken{
		RoomConfiguration: roomConfiguration,
		RegisteredClaims:  jwt.RegisteredClaims{},
	})
	secret, _ := signing.GetHMACSecret()
	roomCreationTokenString, _ := token.SignedString(secret)

	c.SetCookie("RoomCreationToken", roomCreationTokenString, 24*60*60, fmt.Sprintf("/api/realtime/roomConfiguration/%s", roomConfiguration.Id), config.ApplicationRuntimeConfig.Hostname, true, true)

	c.JSON(http.StatusOK, roomConfiguration)
}

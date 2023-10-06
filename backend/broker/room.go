package broker

import (
	"fmt"
	"github.com/NateSeymour/collaborate/backend/util"
	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
	"net/http"
	"time"
)

func createRoom(c *gin.Context) {
	// Create Room info
	expiryTime := time.Now().Unix() + (60 * 60 * 24)
	roomId := util.GenerateSecureId()

	// Create Owner token
	roomCreationToken := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"roomId":  roomId,
		"expires": expiryTime,
	})
	hmacSecret, _ := util.GetHMACSecret()
	roomCreationTokenString, _ := roomCreationToken.SignedString(hmacSecret)

	c.SetCookie("RoomCreationToken", roomCreationTokenString, 3600, fmt.Sprintf("/api/realtime/room/%s", roomId), "localhost:8080", true, true)

	c.JSON(http.StatusOK, gin.H{
		"roomId": roomId,
	})
}

package main

import (
	"crypto/rand"
	"encoding/base64"
	"log"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
)

func generateSecureRoomId() string {
	buffer := make([]byte, 20)
	rand.Read(buffer)

	roomId := base64.URLEncoding.EncodeToString(buffer)

	return roomId
}

func main() {
	// Create a web server
	log.Println("Starting server...")

	gin.SetMode(gin.ReleaseMode)

	router := gin.Default()

	router.POST("/api/broker/CreateRoom", func(c *gin.Context) {
		expiryTime := time.Now().Unix() + (60 * 60 * 24)

		roomId := generateSecureRoomId()

		// Create Owner token
		ownerToken := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
			"roomId":  roomId,
			"role":    "owner",
			"expires": expiryTime,
		})
		ownerTokenString, _ := ownerToken.SignedString([]byte("test"))

		// Create Guest key
		guestToken := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
			"roomId":  roomId,
			"role":    "guest",
			"expires": expiryTime,
		})
		guestTokenString, _ := guestToken.SignedString([]byte("test"))

		c.JSON(http.StatusOK, gin.H{
			"access": gin.H{
				"owner": ownerTokenString,
				"guest": guestTokenString,
			},
		})
	})

	router.Run()
}

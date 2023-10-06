package realtime

import (
	"github.com/gin-gonic/gin"
)

func SetupRoutes(c *gin.Engine) {
	room := c.Group("/api/realtime/room")
	{
		room.GET("/:roomId/GuestAccess", getGuestAccess)
		room.GET("/:roomId", getRoom)
	}
}

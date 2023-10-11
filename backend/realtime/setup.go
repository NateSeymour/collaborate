package realtime

import (
	"github.com/NateSeymour/collaborate/backend/auth/middleware"
	"github.com/NateSeymour/collaborate/backend/realtime/routes"
	"github.com/gin-gonic/gin"
)

func SetupRoutes(c *gin.Engine) {
	room := c.Group("/api/realtime/room")
	{
		room.Use(middleware.UserMiddleware)

		room.GET("/:id", routes.GetRoom)
	}
}

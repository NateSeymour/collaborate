package broker

import (
	"github.com/NateSeymour/collaborate/backend/auth/middleware"
	"github.com/NateSeymour/collaborate/backend/broker/routes"
	"github.com/gin-gonic/gin"
)

func SetupRoutes(c *gin.Engine) {
	broker := c.Group("/api/broker")
	{
		broker.Use(middleware.UserMiddleware)

		broker.POST("/CreateRoom", routes.CreateRoom)
	}
}

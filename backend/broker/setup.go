package broker

import "github.com/gin-gonic/gin"

func SetupRoutes(c *gin.Engine) {
	broker := c.Group("/api/broker")
	{
		broker.POST("/CreateRoom", createRoom)
	}
}

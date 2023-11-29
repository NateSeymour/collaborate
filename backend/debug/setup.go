package debug

import (
	"github.com/NateSeymour/collaborate/backend/debug/routes"
	"github.com/gin-gonic/gin"
)

func SetupRoutes(c *gin.Engine) {
	debug := c.Group("/api/debug")
	{
		debug.GET("/SimulateWork", routes.SimulateWork)
	}
}

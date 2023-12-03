package debug

import (
	"github.com/NateSeymour/collaborate/backend/auth/middleware"
	"github.com/NateSeymour/collaborate/backend/debug/routes"
	"github.com/NateSeymour/collaborate/backend/pb"
	"github.com/gin-gonic/gin"
)

func SetupRoutes(c *gin.Engine) {
	debug := c.Group("/api/debug")
	debug.Use(middleware.UserMiddleware(pb.UserPrivilege_PRIVILEGE_SUPERUSER))
	{
		debug.Any("/SimulateWork", routes.SimulateWork)
		debug.GET("/DevelopmentPlugins", routes.GetDevelopmentPlugins)
		debug.GET("/ServerConfig", routes.GetServerConfig)
	}
}

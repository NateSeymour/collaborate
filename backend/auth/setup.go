package auth

import (
	"github.com/NateSeymour/collaborate/backend/auth/middleware"
	"github.com/NateSeymour/collaborate/backend/auth/routes"
	"github.com/gin-gonic/gin"
)

func SetupRoutes(c *gin.Engine) {
	auth := c.Group("/api/auth")
	{
		auth.GET("/User", middleware.UserMiddleware, routes.GetUser)
		auth.POST("/Login", routes.Login)
	}
}

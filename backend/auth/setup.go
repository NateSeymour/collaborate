package auth

import (
	"github.com/NateSeymour/collaborate/backend/auth/middleware"
	"github.com/NateSeymour/collaborate/backend/auth/routes"
	"github.com/gin-gonic/gin"
)

func SetupRoutes(c *gin.Engine) {
	public := c.Group("/api/auth")
	{
		public.POST("/Login", routes.Login)
		public.POST("/Register", routes.Register)
		public.POST("/VerifyEmail", routes.VerifyEmail)
	}

	private := c.Group("/api/auth")
	private.Use(middleware.AnyUserMiddleware())
	{
		private.GET("/User", routes.GetUser)
		private.POST("/Logout", routes.Logout)
	}
}

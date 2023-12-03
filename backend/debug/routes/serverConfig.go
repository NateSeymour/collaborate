package routes

import (
	"github.com/NateSeymour/collaborate/backend/config"
	"github.com/gin-gonic/gin"
)

func GetServerConfig(c *gin.Context) {
	c.JSON(200, config.ApplicationRuntimeConfig)
}

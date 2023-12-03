package routes

import (
	"github.com/NateSeymour/collaborate/backend/config"
	"github.com/gin-gonic/gin"
	"net/http"
)

func Logout(c *gin.Context) {
	c.SetCookie("User", "", -1, "/", config.ApplicationRuntimeConfig.Hostname, true, true)
	c.Status(http.StatusOK)
}

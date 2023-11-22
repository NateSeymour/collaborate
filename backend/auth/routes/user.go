package routes

import (
	"github.com/NateSeymour/collaborate/backend/pb"
	"github.com/gin-gonic/gin"
	"net/http"
)

func GetUser(c *gin.Context) {
	userValue, hasUser := c.Get("User")
	if !hasUser {
		c.AbortWithStatus(http.StatusUnauthorized)
		return
	}

	c.JSON(http.StatusOK, userValue.(*pb.User))
}

package routes

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

type LoginRequest struct {
	Username string `json:"username" binding:"required"`
	Password string `json:"password" binding:"required"`
}

func Login(c *gin.Context) {
	// Get body
	body := &LoginRequest{}
	bodyErr := c.BindJSON(body)
	if bodyErr != nil {
		c.AbortWithStatus(http.StatusBadRequest)
		return
	}

	// TODO: Implement Login route
}

package routes

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"time"
)

func SimulateWork(c *gin.Context) {
	select {
	case <-time.After(time.Second * 3):
		c.Status(http.StatusOK)
	}
}

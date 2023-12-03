package routes

import (
	"github.com/NateSeymour/collaborate/backend/config"
	"github.com/NateSeymour/collaborate/backend/db"
	"github.com/NateSeymour/collaborate/backend/pb"
	"github.com/NateSeymour/collaborate/backend/signing"
	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
	"net/http"
	"time"
)

type LoginRequest struct {
	Email    string `json:"email" binding:"required"`
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

	// Acquire database connection
	conn, connErr := db.Pool.Acquire(c)
	if connErr != nil {
		c.AbortWithStatus(http.StatusInternalServerError)
		return
	}
	defer conn.Release()

	// Get user information
	var passwordHash string
	user := pb.User{}
	userRow := conn.QueryRow(c, "SELECT id, nickname, email, first_name, last_name, privilege, password FROM users WHERE email=$1", body.Email)
	userRow.Scan(&user.Id, &user.PreferredNickname, &user.Email, &user.FirstName, &user.LastName, &user.Privilege, &passwordHash)

	// Check password against hash
	compErr := bcrypt.CompareHashAndPassword([]byte(passwordHash), []byte(body.Password))
	if compErr != nil {
		c.AbortWithStatus(http.StatusUnauthorized)
		return
	}

	// Create user token
	claims := signing.UserToken{
		User:             &user,
		RegisteredClaims: signing.StandardClaims(30 * 24 * time.Hour),
	}
	token := signing.Sign(&claims)

	c.SetCookie("User", token, int((30*24*time.Hour)/time.Second), "/", config.ApplicationRuntimeConfig.Hostname, true, true)
	c.Status(200)
}

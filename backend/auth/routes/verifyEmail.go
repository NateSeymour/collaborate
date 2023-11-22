package routes

import (
	"github.com/NateSeymour/collaborate/backend/config"
	"github.com/NateSeymour/collaborate/backend/db"
	"github.com/NateSeymour/collaborate/backend/pb"
	"github.com/NateSeymour/collaborate/backend/signing"
	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
	"net/http"
	"time"
)

type VerifyEmailRequest struct {
	Token string `json:"token" binding:"required"`
}

func VerifyEmail(c *gin.Context) {
	// Get body
	body := &VerifyEmailRequest{}
	bodyErr := c.BindJSON(body)
	if bodyErr != nil {
		c.AbortWithStatus(http.StatusBadRequest)
		return
	}

	// Parse token
	token, _ := jwt.ParseWithClaims(body.Token, &signing.EmailVerificationToken{}, signing.JwtKeyFunc)
	if claims, ok := token.Claims.(*signing.EmailVerificationToken); ok && token.Valid {
		// Acquire database connection
		conn, connErr := db.Pool.Acquire(c)
		if connErr != nil {
			c.AbortWithStatus(http.StatusInternalServerError)
			return
		}
		defer conn.Release()

		// Set email verified to true
		conn.Exec(c, "UPDATE users SET email_verified=true WHERE email=$1", claims.EmailAddress)

		// Get user information
		user := pb.User{}
		userRow := conn.QueryRow(c, "SELECT id, nickname, email, first_name, last_name FROM users WHERE email=$1", claims.EmailAddress)
		userRow.Scan(&user.Id, &user.PreferredNickname, &user.Email, &user.FirstName, &user.LastName)

		// Create user token
		claims := signing.UserToken{
			User:             &user,
			RegisteredClaims: signing.StandardClaims(30 * 24 * time.Hour),
		}
		token := signing.Sign(&claims)

		c.SetCookie("User", token, int((30*24*time.Hour)/time.Second), "/", config.ApplicationRuntimeConfig.Hostname, true, true)
	} else {
		c.AbortWithStatus(http.StatusBadRequest)
		return
	}

	c.Status(http.StatusOK)
}

package routes

import (
	"github.com/NateSeymour/collaborate/backend/comms"
	"github.com/NateSeymour/collaborate/backend/config"
	"github.com/NateSeymour/collaborate/backend/db"
	"github.com/NateSeymour/collaborate/backend/signing"
	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
	"net/http"
	"time"
)

type RegisterRequest struct {
	Email    string `json:"email" binding:"required"`
	Password string `json:"password" binding:"required"`
}

func Register(c *gin.Context) {
	// Get body
	body := &RegisterRequest{}
	bodyErr := c.BindJSON(body)
	if bodyErr != nil {
		c.AbortWithStatus(http.StatusBadRequest)
		return
	}

	// Hash the password
	hash, hashErr := bcrypt.GenerateFromPassword([]byte(body.Password), 15)
	if hashErr != nil {
		c.AbortWithStatus(http.StatusInternalServerError)
		return
	}

	// Acquire database connection
	conn, connErr := db.Pool.Acquire(c)
	if connErr != nil {
		c.AbortWithStatus(http.StatusInternalServerError)
		return
	}
	defer conn.Release()

	// Insert new user into database
	_, userErr := conn.Exec(c, "INSERT INTO users(email, password) values($1, $2);", body.Email, hash)
	if userErr != nil {
		c.AbortWithStatus(http.StatusConflict)
		return
	}

	// Create email verification token
	claims := signing.EmailVerificationToken{
		EmailAddress:     body.Email,
		RegisteredClaims: signing.StandardClaims(time.Hour * 24),
	}
	token := signing.Sign(&claims)

	// Send verification email
	message := comms.MailgunClient.NewMessage("noreply@swifteams.com", "Verify Your Email", "", body.Email)
	message.SetTemplate("user-email-verification")
	message.AddTemplateVariable("host", config.ApplicationRuntimeConfig.QualifiedHost)
	message.AddTemplateVariable("verification_token", token)

	comms.MailgunClient.Send(c, message)

	c.Status(http.StatusAccepted)
}

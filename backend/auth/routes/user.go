package routes

import (
	"github.com/NateSeymour/collaborate/backend/config"
	"github.com/NateSeymour/collaborate/backend/pb"
	"github.com/NateSeymour/collaborate/backend/signing"
	"github.com/NateSeymour/collaborate/backend/util"
	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
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

type LoginRequest struct {
	Username string `json:"username" binding:"required"`
	Password string `json:"password,omitempty"`
}

func Login(c *gin.Context) {
	// Get body
	body := &LoginRequest{}
	bindErr := c.BindJSON(body)
	if bindErr != nil {
		c.AbortWithStatus(http.StatusBadRequest)
		return
	}

	// TODO: Implement actual users with login
	if body.Username != "guest" {
		c.AbortWithStatus(http.StatusTeapot)
		return
	}

	guestNickname := "Guest"
	guestUsername := "guest"
	guestFirstName := "John"
	guestLastName := "Smith"
	claims := signing.UserToken{
		&pb.User{
			SubscriptionType:  pb.UserSubscriptionType_USER_SUBSCRIPTION_FREE,
			Id:                util.GenerateSecureId(15),
			PreferredNickname: &guestNickname,
			Username:          &guestUsername,
			FirstName:         &guestFirstName,
			LastName:          &guestLastName,
		},
		jwt.RegisteredClaims{},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, &claims)
	secret, _ := signing.GetHMACSecret()
	signedTokenString, _ := token.SignedString(secret)

	c.SetCookie("User", signedTokenString, 0, "/", config.ApplicationRuntimeConfig.Hostname, true, true)

	c.JSON(http.StatusOK, &claims.User)
}

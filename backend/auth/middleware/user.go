package middleware

import (
	"github.com/NateSeymour/collaborate/backend/signing"
	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
	"net/http"
)

func UserMiddleware(c *gin.Context) {
	// Get the User cookie
	userCookie, userCookieErr := c.Request.Cookie("User")
	if userCookieErr != nil {
		c.AbortWithStatus(http.StatusUnauthorized)
		return
	}

	// Parse the cookie as JWT.
	token, _ := jwt.ParseWithClaims(userCookie.Value, &signing.UserToken{}, signing.JwtKeyFunc)
	if claims, ok := token.Claims.(*signing.UserToken); ok && token.Valid {
		c.Set("User", claims.User)
	} else {
		c.AbortWithStatus(http.StatusUnauthorized)
		return
	}

	c.Next()
}

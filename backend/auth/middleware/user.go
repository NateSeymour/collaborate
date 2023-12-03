package middleware

import (
	"github.com/NateSeymour/collaborate/backend/pb"
	"github.com/NateSeymour/collaborate/backend/signing"
	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
	"net/http"
)

func UserMiddleware(minPrivilege pb.UserPrivilege) gin.HandlerFunc {
	return func(c *gin.Context) {
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

			// Check privilege
			if minPrivilege != pb.UserPrivilege_USER_PRIVILEGE_UNSPECIFIED {
				var userPrivilege pb.UserPrivilege
				if claims.User.Privilege == "standard" {
					userPrivilege = pb.UserPrivilege_PRIVILEGE_STANDARD
				} else if claims.User.Privilege == "superuser" {
					userPrivilege = pb.UserPrivilege_PRIVILEGE_SUPERUSER
				}

				if userPrivilege < minPrivilege {
					c.AbortWithStatus(http.StatusUnauthorized)
					return
				}
			}

		} else {
			c.AbortWithStatus(http.StatusUnauthorized)
			return
		}

		c.Next()
	}
}

func AnyUserMiddleware() gin.HandlerFunc {
	return UserMiddleware(pb.UserPrivilege_USER_PRIVILEGE_UNSPECIFIED)
}

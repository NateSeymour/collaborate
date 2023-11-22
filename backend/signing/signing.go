package signing

import (
	"github.com/golang-jwt/jwt/v5"
	"time"
)

func GetHMACSecret() ([]byte, error) {
	return []byte("test"), nil
}

func JwtKeyFunc(token *jwt.Token) (interface{}, error) {
	return GetHMACSecret()
}

func StandardClaims(d time.Duration) jwt.RegisteredClaims {
	return jwt.RegisteredClaims{
		ExpiresAt: jwt.NewNumericDate(time.Now().Add(d)),
		IssuedAt:  jwt.NewNumericDate(time.Now()),
	}
}

func Sign(claims jwt.Claims) string {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	secret, _ := GetHMACSecret()
	signedTokenString, _ := token.SignedString(secret)

	return signedTokenString
}

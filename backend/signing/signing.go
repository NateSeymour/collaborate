package signing

import "github.com/golang-jwt/jwt/v5"

func GetHMACSecret() ([]byte, error) {
	return []byte("test"), nil
}

func JwtKeyFunc(token *jwt.Token) (interface{}, error) {
	return GetHMACSecret()
}

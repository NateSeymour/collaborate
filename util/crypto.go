package CollaborateUtil

import (
	"crypto/rand"
	"encoding/base64"
)

func GenerateSecureId() string {
	buffer := make([]byte, 12)
	rand.Read(buffer)

	id := base64.URLEncoding.EncodeToString(buffer)

	return id
}

func GetHMACSecret() ([]byte, error) {
	return []byte("test"), nil
}

package util

import (
	"crypto/rand"
	"encoding/base64"
)

func GenerateSecureId(requestedLength uint32) string {
	// Round up to the nearest multiple of 3 to avoid the trailing equals sign from base64
	length := requestedLength + (3 - (requestedLength % 3))

	buffer := make([]byte, length)
	rand.Read(buffer)

	id := base64.URLEncoding.EncodeToString(buffer)

	return id
}

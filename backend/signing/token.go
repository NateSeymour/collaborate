package signing

import (
	"github.com/NateSeymour/collaborate/backend/pb"
	"github.com/golang-jwt/jwt/v5"
)

type UserToken struct {
	*pb.User
	jwt.RegisteredClaims
}

type RoomCreationToken struct {
	*pb.Room
	jwt.RegisteredClaims
}

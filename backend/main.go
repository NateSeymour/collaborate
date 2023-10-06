package main

import (
	"github.com/NateSeymour/collaborate/backend/broker"
	"github.com/NateSeymour/collaborate/backend/realtime"
	"github.com/NateSeymour/collaborate/backend/util"
	"github.com/gin-gonic/gin"
	"log"
)

func main() {
	config := util.GetConfig()

	switch config.Mode {
	case util.CONFIG_MODE_PRODUCTION:
		gin.SetMode(gin.ReleaseMode)
	case util.CONFIG_MODE_DEVELOPMENT:
		gin.SetMode(gin.DebugMode)
	}

	router := gin.Default()

	if config.EnabledServices["realtime"] {
		log.Print("[Main] Enabling realtime service...")
		realtime.SetupRoutes(router)
	}

	if config.EnabledServices["broker"] {
		log.Print("[Main] Enabling broker service...")
		broker.SetupRoutes(router)
	}

	router.Run(config.Port)
}

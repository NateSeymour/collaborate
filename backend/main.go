package main

import (
	"github.com/NateSeymour/collaborate/backend/auth"
	"github.com/NateSeymour/collaborate/backend/broker"
	"github.com/NateSeymour/collaborate/backend/config"
	"github.com/NateSeymour/collaborate/backend/realtime"
	"github.com/gin-gonic/gin"
	"log"
)

func main() {
	config.ParseApplicationRuntimeConfig()

	switch config.ApplicationRuntimeConfig.Mode {
	case config.CONFIG_MODE_PRODUCTION:
		gin.SetMode(gin.ReleaseMode)
	case config.CONFIG_MODE_DEVELOPMENT:
		gin.SetMode(gin.DebugMode)
	}

	router := gin.Default()

	if config.ApplicationRuntimeConfig.EnabledServices["realtime"] {
		log.Print("[Main] Enabling realtime service...")
		realtime.SetupRoutes(router)
	}

	if config.ApplicationRuntimeConfig.EnabledServices["broker"] {
		log.Print("[Main] Enabling broker service...")
		broker.SetupRoutes(router)
	}

	if config.ApplicationRuntimeConfig.EnabledServices["auth"] {
		log.Print("[Main] Enabling auth service...")
		auth.SetupRoutes(router)
	}

	router.Run(config.ApplicationRuntimeConfig.Port)
}

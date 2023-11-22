package main

import (
	"context"
	"github.com/NateSeymour/collaborate/backend/auth"
	"github.com/NateSeymour/collaborate/backend/broker"
	"github.com/NateSeymour/collaborate/backend/comms"
	"github.com/NateSeymour/collaborate/backend/config"
	"github.com/NateSeymour/collaborate/backend/db"
	"github.com/NateSeymour/collaborate/backend/realtime"
	"github.com/gin-gonic/gin"
	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/mailgun/mailgun-go/v4"
	"log"
)

func main() {
	configErr := config.ParseApplicationRuntimeConfig()
	if configErr != nil {
		log.Fatal(configErr.Error())
	}

	switch config.ApplicationRuntimeConfig.Mode {
	case config.CONFIG_MODE_PRODUCTION:
		gin.SetMode(gin.ReleaseMode)
	case config.CONFIG_MODE_DEVELOPMENT:
		gin.SetMode(gin.DebugMode)
	}

	// Setup database connection
	pool, poolErr := pgxpool.New(context.Background(), config.ApplicationRuntimeConfig.DbConnectionString)
	if poolErr != nil {
		return
	}

	db.Pool = pool
	defer db.Pool.Close()

	// Setup mailgun client
	comms.MailgunClient = mailgun.NewMailgun(config.ApplicationRuntimeConfig.MailgunDomain, config.ApplicationRuntimeConfig.MailgunApiKey)

	// Setup HTTP server
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

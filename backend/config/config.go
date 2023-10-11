package config

import (
	"os"
	"strings"
)

type RuntimeMode uint64

const (
	CONFIG_MODE_PRODUCTION RuntimeMode = iota
	CONFIG_MODE_DEVELOPMENT
)

type RuntimeConfig struct {
	Hostname        string
	Port            string
	Mode            RuntimeMode
	EnabledServices map[string]bool
}

var ApplicationRuntimeConfig RuntimeConfig

func ParseApplicationRuntimeConfig() {
	ApplicationRuntimeConfig.EnabledServices = make(map[string]bool)

	hostname, hasHostname := os.LookupEnv("COLLABORATE_HOST")
	if !hasHostname {
		ApplicationRuntimeConfig.Hostname = "localhost:8080"
	} else {
		ApplicationRuntimeConfig.Hostname = hostname
	}

	port, hasPort := os.LookupEnv("COLLABORATE_PORT")
	if !hasPort {
		ApplicationRuntimeConfig.Port = ":8080"
	} else {
		ApplicationRuntimeConfig.Port = port
	}

	mode := os.Getenv("COLLABORATE_MODE")
	if mode == "production" {
		ApplicationRuntimeConfig.Mode = CONFIG_MODE_PRODUCTION
	} else {
		ApplicationRuntimeConfig.Mode = CONFIG_MODE_DEVELOPMENT
	}

	services, hasServices := os.LookupEnv("COLLABORATE_ENABLED_SERVICES")
	if hasServices {
		for _, service := range strings.Split(services, ",") {
			ApplicationRuntimeConfig.EnabledServices[service] = true
		}
	}
}

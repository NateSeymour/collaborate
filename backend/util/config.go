package util

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

func GetConfig() RuntimeConfig {
	config := RuntimeConfig{}
	config.EnabledServices = make(map[string]bool)

	hostname, hasHostname := os.LookupEnv("COLLABORATE_HOST")
	if !hasHostname {
		config.Hostname = "localhost:8080"
	} else {
		config.Hostname = hostname
	}

	port, hasPort := os.LookupEnv("COLLABORATE_PORT")
	if !hasPort {
		config.Port = ":8080"
	} else {
		config.Port = port
	}

	mode := os.Getenv("COLLABORATE_MODE")
	if mode == "production" {
		config.Mode = CONFIG_MODE_PRODUCTION
	} else {
		config.Mode = CONFIG_MODE_DEVELOPMENT
	}

	services, hasServices := os.LookupEnv("COLLABORATE_ENABLED_SERVICES")
	if hasServices {
		for _, service := range strings.Split(services, ",") {
			config.EnabledServices[service] = true
		}
	}

	return config
}

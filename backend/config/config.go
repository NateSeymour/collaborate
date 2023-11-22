package config

import (
	"errors"
	"os"
	"strings"
)

type RuntimeMode uint64

const (
	CONFIG_MODE_PRODUCTION RuntimeMode = iota
	CONFIG_MODE_DEVELOPMENT
)

type RuntimeConfig struct {
	Hostname           string
	Port               string
	QualifiedHost      string
	Mode               RuntimeMode
	EnabledServices    map[string]bool
	DbConnectionString string
	MailgunApiKey      string
	MailgunDomain      string
}

var ApplicationRuntimeConfig RuntimeConfig

func ParseApplicationRuntimeConfig() error {
	ApplicationRuntimeConfig.EnabledServices = make(map[string]bool)

	hostname, hasHostname := os.LookupEnv("SWIFTEAMS_HOST")
	if hasHostname {
		ApplicationRuntimeConfig.Hostname = hostname
	} else {
		ApplicationRuntimeConfig.Hostname = "localhost:8080"
	}

	port, hasPort := os.LookupEnv("SWIFTEAMS_PORT")
	if hasPort {
		ApplicationRuntimeConfig.Port = port
	} else {
		ApplicationRuntimeConfig.Port = ":8080"
	}

	qualifiedHost, hasQualifiedHost := os.LookupEnv("SWIFTEAMS_QUALIFIED_HOST")
	if hasQualifiedHost {
		ApplicationRuntimeConfig.QualifiedHost = qualifiedHost
	} else {
		ApplicationRuntimeConfig.QualifiedHost = ApplicationRuntimeConfig.Hostname
	}

	mode := os.Getenv("SWIFTEAMS_MODE")
	if mode == "production" {
		ApplicationRuntimeConfig.Mode = CONFIG_MODE_PRODUCTION
	} else {
		ApplicationRuntimeConfig.Mode = CONFIG_MODE_DEVELOPMENT
	}

	services, hasServices := os.LookupEnv("SWIFTEAMS_ENABLED_SERVICES")
	if hasServices {
		for _, service := range strings.Split(services, ",") {
			ApplicationRuntimeConfig.EnabledServices[service] = true
		}
	}

	dbString, hasDbString := os.LookupEnv("DB_CONNECTION_STRING")
	if hasDbString {
		ApplicationRuntimeConfig.DbConnectionString = dbString
	} else {
		return errors.New("the configuration does not specify a database connection string")
	}

	mgKey, hasMgKey := os.LookupEnv("MAILGUN_API_KEY")
	if hasMgKey {
		ApplicationRuntimeConfig.MailgunApiKey = mgKey
	} else {
		return errors.New("the configuration does not specify a mailgun api key")
	}

	mgDomain, hasMgDomain := os.LookupEnv("MAILGUN_DOMAIN")
	if hasMgDomain {
		ApplicationRuntimeConfig.MailgunDomain = mgDomain
	} else {
		return errors.New("the configuration does not specify a mailgun domain")
	}

	return nil
}

package routes

import (
	"fmt"
	"github.com/NateSeymour/collaborate/backend/config"
	"github.com/gin-gonic/gin"
	"io/fs"
	"net/http"
	"os"
)

type DevelopmentPluginsResponse struct {
	plugins map[string][]string
}

// GetDevelopmentPlugins gets the current list of development plugins from the
// file system and returns them.
//
// If no directory is specified in the configuration, it returns 400.
//
// Requires user to be authenticated with 'superuser' privileges.
func GetDevelopmentPlugins(c *gin.Context) {
	// Create response body
	res := DevelopmentPluginsResponse{}
	res.plugins = make(map[string][]string)

	// Walk file system
	pluginFS := os.DirFS(config.ApplicationRuntimeConfig.DevelopmentPluginsDir)

	fs.WalkDir(pluginFS, ".", func(path string, d fs.DirEntry, err error) error {
		if path == "." {
			return nil
		}

		// Initialize a new slice
		res.plugins[path] = []string{}

		return nil
	})

	for org, pluginList := range res.plugins {
		orgFS, _ := fs.Sub(pluginFS, fmt.Sprintf("/%s", org))
		fs.WalkDir(orgFS, ".", func(path string, d fs.DirEntry, err error) error {
			fmt.Println(path)

			if path == "." {
				return nil
			}

			res.plugins[org] = append(pluginList, path)

			return nil
		})
	}

	c.JSON(http.StatusOK, DevelopmentPluginsResponse{})
}

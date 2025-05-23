package internal

import "github.com/gin-gonic/gin"

func NewRouter() *gin.Engine {
	return gin.Default()
}

func StartServer(router *gin.Engine) {
	router.Run(":5000")
}

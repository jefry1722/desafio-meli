package api

import (
	"desafiomeli/src/domain/interfaces"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

type ProductsController struct {
	productsService interfaces.IProductsService
}

func NewProductsController(router *gin.Engine, service interfaces.IProductsService) *ProductsController {
	controller := &ProductsController{productsService: service}

	router.Use(cors.Default())

	router.GET("/products/:id", controller.GetProductDetailByID)

	return controller
}

package api

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func (controller *ProductsController) GetProductDetailByID(ctx *gin.Context) {
	id := ctx.Param("id")
	product, err := controller.productsService.GetProductDetailByID(id)
	if err != nil {
		if err.Error() == "producto no encontrado" {
			ctx.JSON(http.StatusNotFound, errorResponse(err))
			return
		}
		ctx.JSON(http.StatusInternalServerError, errorResponse(err))
		return
	}
	ctx.JSON(http.StatusOK, product)
}

func errorResponse(err error) gin.H {
	return gin.H{"error": err.Error()}
}

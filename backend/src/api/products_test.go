package api

import (
	"desafiomeli/mocks"
	"desafiomeli/src/domain/entities"
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/assert"
)

func TestGetProductDetailByIDSuccesfull(t *testing.T) {
	gin.SetMode(gin.TestMode)
	id := "12"

	productsService := mocks.NewMockIProductsService(t)
	productsResponse := &entities.Product{
		ID:        id,
		Title:     "Samsung",
		Condition: "Nuevo",
		Category:  "Celulares",
	}
	productsService.On("GetProductDetailByID", id).Return(productsResponse, nil)

	url := fmt.Sprintf("/products/%s", id)
	req, _ := http.NewRequest(http.MethodGet, url, nil)
	w := httptest.NewRecorder()

	router := gin.New()
	NewProductsController(router, productsService)

	router.ServeHTTP(w, req)
	var product *entities.Product
	err := json.Unmarshal(w.Body.Bytes(), &product)
	assert.NoError(t, err)
	assert.Equal(t, http.StatusOK, w.Code)
	assert.Equal(t, productsResponse.ID, product.ID)
	assert.Equal(t, productsResponse.Title, product.Title)
}

func TestGetProductDetailByIDErrorProductoNoEncontrado(t *testing.T) {
	gin.SetMode(gin.TestMode)
	id := "56"

	productsService := mocks.NewMockIProductsService(t)
	productsService.On("GetProductDetailByID", id).Return(nil, errors.New("producto no encontrado"))

	url := fmt.Sprintf("/products/%s", id)
	req, _ := http.NewRequest(http.MethodGet, url, nil)
	w := httptest.NewRecorder()

	router := gin.New()
	NewProductsController(router, productsService)

	router.ServeHTTP(w, req)
	assert.Equal(t, http.StatusNotFound, w.Code)
}

func TestGetProductDetailByIDErrorIntenal(t *testing.T) {
	gin.SetMode(gin.TestMode)
	id := "56"

	productsService := mocks.NewMockIProductsService(t)
	productsService.On("GetProductDetailByID", id).Return(nil, errors.New("internal error"))

	url := fmt.Sprintf("/products/%s", id)
	req, _ := http.NewRequest(http.MethodGet, url, nil)
	w := httptest.NewRecorder()

	router := gin.New()
	NewProductsController(router, productsService)

	router.ServeHTTP(w, req)
	assert.Equal(t, http.StatusInternalServerError, w.Code)
}

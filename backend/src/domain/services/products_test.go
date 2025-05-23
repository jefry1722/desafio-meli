package services

import (
	"desafiomeli/mocks"
	"desafiomeli/src/domain/entities"
	"errors"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestGetProductDetailByIDSuccess(t *testing.T) {
	id := "124"
	productsFinder := mocks.NewMockIProductsFinder(t)

	productsResponse := &entities.Product{
		ID:        id,
		Title:     "Samsung",
		Condition: "Nuevo",
		Category:  "Celulares",
	}
	productsFinder.On("GetProductDetailByID", id).Return(productsResponse, nil)

	productsService := NewProductsService(productsFinder)
	product, err := productsService.GetProductDetailByID(id)
	assert.NoError(t, err)
	assert.NotNil(t, product)
	assert.Equal(t, productsResponse.Title, product.Title)
	assert.Equal(t, productsResponse.ID, product.ID)
}

func TestGetProductDetailByIDError(t *testing.T) {
	id := "124"
	productsFinder := mocks.NewMockIProductsFinder(t)

	productsFinder.On("GetProductDetailByID", id).Return(nil, errors.New("producto no encontrado"))

	productsService := NewProductsService(productsFinder)
	product, err := productsService.GetProductDetailByID(id)
	assert.Error(t, err)
	assert.Nil(t, product)
}

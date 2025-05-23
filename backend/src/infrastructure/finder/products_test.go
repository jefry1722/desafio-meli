package finder

import (
	"desafiomeli/src/api/config"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestGetProductDetailByID_Success(t *testing.T) {
	id := "123"
	productsFinder := NewProductsFinder(&config.Configurations{
		Filepath: "../../../data/products.json",
	})
	product, err := productsFinder.GetProductDetailByID(id)
	assert.NoError(t, err)
	assert.NotNil(t, product)
	assert.Equal(t, id, product.ID)
}

func TestGetProductDetailByID_FileNotFound(t *testing.T) {
	id := "123"
	productsFinder := NewProductsFinder(&config.Configurations{
		Filepath: "./data/products.json",
	})
	product, err := productsFinder.GetProductDetailByID(id)
	assert.Error(t, err)
	assert.Nil(t, product)
}

func TestGetProductDetailByID_ErrorUnmarshall(t *testing.T) {
	id := "123"
	productsFinder := NewProductsFinder(&config.Configurations{
		Filepath: "../../../mocks/products_error.json",
	})
	product, err := productsFinder.GetProductDetailByID(id)
	assert.Error(t, err)
	assert.Nil(t, product)
}

func TestGetProductDetailByID_ProductNotFound(t *testing.T) {
	id := "567"
	productsFinder := NewProductsFinder(&config.Configurations{
		Filepath: "../../../data/products.json",
	})
	product, err := productsFinder.GetProductDetailByID(id)
	assert.Error(t, err)
	assert.Nil(t, product)
}

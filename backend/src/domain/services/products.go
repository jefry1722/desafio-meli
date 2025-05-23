package services

import (
	"desafiomeli/src/domain/entities"
)

func (productsService ProductsService) GetProductDetailByID(id string) (*entities.Product, error) {
	product, err := productsService.ProductsFinder.GetProductDetailByID(id)
	if err != nil {
		return nil, err
	}
	return product, nil
}

package interfaces

import (
	"desafiomeli/src/domain/entities"
)

type IProductsService interface {
	GetProductDetailByID(string) (*entities.Product, error)
}

type IProductsFinder interface {
	GetProductDetailByID(string) (*entities.Product, error)
}

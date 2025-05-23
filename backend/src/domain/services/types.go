package services

import "desafiomeli/src/domain/interfaces"

type ProductsService struct {
	ProductsFinder interfaces.IProductsFinder
}

func NewProductsService(productsFinder interfaces.IProductsFinder) interfaces.IProductsService {
	return &ProductsService{ProductsFinder: productsFinder}
}

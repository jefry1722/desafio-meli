package finder

import (
	"desafiomeli/src/api/config"
	"desafiomeli/src/domain/entities"
	"desafiomeli/src/domain/interfaces"
	"encoding/json"
	"io"
	"os"

	"errors"
)

type ProductsFinder struct {
	filepath string
}

func NewProductsFinder(configurations *config.Configurations) interfaces.IProductsFinder {
	return &ProductsFinder{filepath: configurations.Filepath}
}

func (productsFinder *ProductsFinder) GetProductDetailByID(id string) (*entities.Product, error) {
	file, err := os.Open(productsFinder.filepath)
	if err != nil {
		return nil, err
	}
	defer file.Close()

	var products []entities.Product
	bytes, err := io.ReadAll(file)
	if err != nil {
		return nil, err
	}
	if err := json.Unmarshal(bytes, &products); err != nil {
		return nil, err
	}

	for _, product := range products {
		if product.ID == id {
			return &product, nil
		}
	}

	return nil, errors.New("producto no encontrado")
}

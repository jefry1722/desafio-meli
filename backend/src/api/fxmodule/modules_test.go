package fxmodule

import (
	"testing"

	"github.com/stretchr/testify/assert"
	"go.uber.org/fx"
)

func TestProductsModule(t *testing.T) {
	productsModule := ProductsModule()
	assert.IsType(t, fx.Options(), productsModule)
}

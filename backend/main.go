package main

import (
	"desafiomeli/internal"
	"desafiomeli/src/api"
	"desafiomeli/src/api/fxmodule"

	"go.uber.org/fx"
)

func main() {
	app := fx.New(
		fxmodule.ProductsModule(),
		fx.Invoke(
			api.NewProductsController,
			internal.StartServer),
	)

	app.Run()
}

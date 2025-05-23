package fxmodule

import (
	"desafiomeli/internal"
	"desafiomeli/src/api/config"
	"desafiomeli/src/domain/services"
	"desafiomeli/src/infrastructure/finder"

	"go.uber.org/fx"
)

func ProductsModule() fx.Option {
	return fx.Options(
		fx.Provide(
			config.NewConfigurations,
			internal.NewRouter,
			finder.NewProductsFinder,
			services.NewProductsService,
		),
	)
}

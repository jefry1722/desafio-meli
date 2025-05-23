package config

type Configurations struct {
	Filepath string
}

func NewConfigurations() *Configurations {
	return &Configurations{Filepath: "./data/products.json"}
}

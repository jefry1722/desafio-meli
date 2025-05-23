package config

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestNewConfigurations(t *testing.T) {
	configurations := NewConfigurations()
	assert.IsType(t, &Configurations{}, configurations)
}

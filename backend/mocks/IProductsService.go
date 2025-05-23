// Code generated by mockery; DO NOT EDIT.
// github.com/vektra/mockery
// template: testify

package mocks

import (
	"desafiomeli/src/domain/entities"

	mock "github.com/stretchr/testify/mock"
)

// NewMockIProductsService creates a new instance of MockIProductsService. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewMockIProductsService(t interface {
	mock.TestingT
	Cleanup(func())
}) *MockIProductsService {
	mock := &MockIProductsService{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}

// MockIProductsService is an autogenerated mock type for the IProductsService type
type MockIProductsService struct {
	mock.Mock
}

type MockIProductsService_Expecter struct {
	mock *mock.Mock
}

func (_m *MockIProductsService) EXPECT() *MockIProductsService_Expecter {
	return &MockIProductsService_Expecter{mock: &_m.Mock}
}

// GetProductDetailByID provides a mock function for the type MockIProductsService
func (_mock *MockIProductsService) GetProductDetailByID(s string) (*entities.Product, error) {
	ret := _mock.Called(s)

	if len(ret) == 0 {
		panic("no return value specified for GetProductDetailByID")
	}

	var r0 *entities.Product
	var r1 error
	if returnFunc, ok := ret.Get(0).(func(string) (*entities.Product, error)); ok {
		return returnFunc(s)
	}
	if returnFunc, ok := ret.Get(0).(func(string) *entities.Product); ok {
		r0 = returnFunc(s)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*entities.Product)
		}
	}
	if returnFunc, ok := ret.Get(1).(func(string) error); ok {
		r1 = returnFunc(s)
	} else {
		r1 = ret.Error(1)
	}
	return r0, r1
}

// MockIProductsService_GetProductDetailByID_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'GetProductDetailByID'
type MockIProductsService_GetProductDetailByID_Call struct {
	*mock.Call
}

// GetProductDetailByID is a helper method to define mock.On call
//   - s
func (_e *MockIProductsService_Expecter) GetProductDetailByID(s interface{}) *MockIProductsService_GetProductDetailByID_Call {
	return &MockIProductsService_GetProductDetailByID_Call{Call: _e.mock.On("GetProductDetailByID", s)}
}

func (_c *MockIProductsService_GetProductDetailByID_Call) Run(run func(s string)) *MockIProductsService_GetProductDetailByID_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(string))
	})
	return _c
}

func (_c *MockIProductsService_GetProductDetailByID_Call) Return(product *entities.Product, err error) *MockIProductsService_GetProductDetailByID_Call {
	_c.Call.Return(product, err)
	return _c
}

func (_c *MockIProductsService_GetProductDetailByID_Call) RunAndReturn(run func(s string) (*entities.Product, error)) *MockIProductsService_GetProductDetailByID_Call {
	_c.Call.Return(run)
	return _c
}

package main

import (
	"reflect"
	"testing"
	"strings"
)

func TestPhoneNumber(t *testing.T) {
	t.Run("Returns a string", func(t *testing.T) {
		result := CreatePhoneNumber([10]uint{1,2,3,4,5,6,7,8,9,0})

		if reflect.TypeOf(result).Kind() != reflect.String {
			t.Errorf("Returned value is not a string")
		}
	})

	t.Run("Includes parenthesis", func(t *testing.T) {
		result := CreatePhoneNumber([10]uint{1,2,3,4,5,6,7,8,9,0})

		if !strings.Contains(result, "(") || !strings.Contains(result, ")") {
			t.Errorf("String does not contain parenthesis typical for a phone number")
		}
	})
}

package main

import (
	"fmt"
	"reflect"
	"testing"
)

func TestSum(t *testing.T) {
	t.Run("Is a number", func(t *testing.T) {
		result := Multiple3And5(1)

		if reflect.TypeOf(result).Kind() != reflect.Int {
			t.Errorf("Returned value is not a number")
		}
	})

	t.Run("Returns 0 for number 1", func(t *testing.T) {
		given, exp := Multiple3And5(1), 0

		if given != exp {
			s := fmt.Sprintf("Expected was %d, but given was %d", exp, given)
			t.Errorf(s)
		}
	})

	t.Run("Returns 0 for number 3", func(t *testing.T) {
		given, exp := Multiple3And5(3), 0

		if given != exp {
			s := fmt.Sprintf("Expected was %d, but given was %d", exp, given)
			t.Errorf(s)
		}
	})

	t.Run("Returns 3 for number 4", func(t *testing.T) {
		given, exp := Multiple3And5(4), 3

		if given != exp {
			s := fmt.Sprintf("Expected was %d, but given was %d", exp, given)
			t.Errorf(s)
		}
	})

	t.Run("Returns 8 for number 6", func(t *testing.T) {
		given, exp := Multiple3And5(6), 8

		if given != exp {
			s := fmt.Sprintf("Expected was %d, but given was %d", exp, given)
			t.Errorf(s)
		}
	})

	t.Run("Returns 10 for number 23", func(t *testing.T) {
		given, exp := Multiple3And5(10), 23

		if given != exp {
			s := fmt.Sprintf("Expected was %d, but given was %d", exp, given)
			t.Errorf(s)
		}
	})

}

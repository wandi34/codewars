package main

import (
    "fmt"
)

func main() {
	result := CreatePhoneNumber([10]uint{1,2,3,4,5,6,7,8,9,0})
	println(result)
}

// Converts an array of numbers to a phone format like "(123) 456-7890"
func CreatePhoneNumber(param [10]uint) string {
	result := ""
	for index, element := range param {
		switch index {
		case 0: 
			result = result + "("
		case 3:
			result = result + ") "
		case 6:
			result = result + "-"
		}
		result = result + fmt.Sprintf("%d", element)
	}
	return result
}

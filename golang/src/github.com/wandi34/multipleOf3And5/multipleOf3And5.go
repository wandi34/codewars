package main

func main() {
}

// Returns sum of all numbers below given number which are multiples of 3 or 5
func Multiple3And5(number int) int {
	result := 0
	for number > 3 {
		number--
		if number%3 == 0 || number%5 == 0 {
			result += number
		}
	}
	return result
}

package main

import (
	"fmt"
	"math/rand"
	"time"
)

func init() {
	rand.Seed(time.Now().UnixNano())
}

func getRandomNumber() float64 {
	return rand.Float64()
}

func main() {
	// Example usage:
	randomNum := getRandomNumber()
	fmt.Println(randomNum)
}

package main

import (
	"fmt"
	"time"

	"github.com/google/uuid"
)

func worker(workerID string, data chan int) {
	for value := range data { // similar ao while, enquanto tem dado vai processando
		fmt.Printf("Worker %s received %d\n", workerID, value)
		time.Sleep(time.Second)
	}
}

func main() { // exemplo de como seria o funcionamento de um balanceador
	ch := make(chan int) // cria um canal para compartilhar dados entre as threads
	qtdsWorkers := 3

	// T2
	for i := 0; i < qtdsWorkers; i++ {
		go worker(uuid.New().String(), ch)
	}

	// T1
	for i := 0; i < 10000; i++ {
		ch <- i
	}
}

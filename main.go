package main

import (
	"ClipHist/Clip"
	"ClipHist/ClipDB"
	"ClipHist/Notify"
	"fmt"

	_ "github.com/mattn/go-sqlite3"
)

var lastClip string

func main() {
	done := make(chan bool)
	//channel to recieve notifications
	alert := make(chan bool)

	db, err := ClipDB.Init("./sqliteDb/ClipHist.db")
	if err != nil {
		fmt.Println(err)
	}

	go Clip.ChanStart(alert, db)

	go Notify.Recieve(alert)

	//keep main alive
	<-done

}

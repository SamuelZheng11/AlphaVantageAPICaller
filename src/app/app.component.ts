import { Component, OnInit } from "@angular/core";
import { HttpClient } from "../../node_modules/@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  mapper = {
    1: "1. open",
    2: "2. high",
    3: "3. low",
    4: "4. close",
    5: "6. volume"
  };

  companyEquityKey = { amazon: "AMZN", apple: "AAPL", alphabet: "GOOG" };

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    // const { exec } = require('child_process');
    //     exec(`cd c:;
    //     sqlite3 StocksDatabase.db;
    //     create table Stocks (Date DATETIME, Stock FLOAT, Open FLOAT, High FLOAT, Low FLOAT, Close_Value FLOAT, Volume INT);`
    //     , (err, stdout, stderr) => {
    //       console.log(err + "" + stdout + "" + stderr);
    //       });

    for (let i = 0; i < 3; i++) {
      this.httpClient
        .get(
          `https://www.alphavantage.co/query?outputsize=full&function=TIME_SERIES_DAILY_ADJUSTED&symbol=${
            this.companyEquityKey[i]
          }&apikey=6J3951K0XLNS1YF3`
        )
        .subscribe((result: any) => {
          debugger;
          const allStocks = result["Time Series (Daily)"];
          const endDate = new Date();
          const startDate = new Date();
          startDate.setFullYear(endDate.getFullYear() - 10);
          while (startDate <= endDate) {
            let dailyStock =
              allStocks[startDate.toISOString().substring(0, 10)];
            if (dailyStock) {
              // exec(
              //   `insert into Stocks (Date, Stock, Open, High, Low, Close_Value, Volume) values (${date}, -1, ${dailyStock[this.mapper[1]]}, ${dailyStock[this.mapper[2]]}, ${dailyStock[this.mapper[3]]}, ${dailyStock[this.mapper[4]]}, ${dailyStock[this.mapper[5]]}, )`,
              //   (err, stdout, stderr) => {}
              // );
            } else {
              // exec(
              //   `insert into Stocks (Date, Stock, Open, High, Low, Close_Value, Volume) values (${date}, -1, ${dailyStock[this.mapper[1]]}, ${dailyStock[this.mapper[2]]}, ${dailyStock[this.mapper[3]]}, ${dailyStock[this.mapper[4]]}, ${dailyStock[this.mapper[5]]}, )`,
              //   (err, stdout, stderr) => {}
              // );
            }
            startDate.setDate(startDate.getDate() + 1);
          }
          debugger;
        });
    }
  }
}

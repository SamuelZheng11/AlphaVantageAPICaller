# HTTP

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Alpha Vantage API calling
I first started by going to Alpha Vantage and looking at the steps to signing up and getting a free API key. Next, I looked at the API documentation and saw that the API keys were being passed in as part of the Query parameters. 
Next, I saw that I had to use SQLite to store any information I query for from Alpha Vantage. My machine, at the time, did not have a SQLite install, and so I had to download it from the SQLite website. After a bit of trouble shooting I got the SQLite3 shell to work and was able to create the database with the command:
 ”sqlite3 {databaseName}.db”
Next, I created a table in it with the command:
“create table {tableName}(…)” 
where “…” are the schema stated in the second task.
Next, I created an Angular 6 project to take advantage of the HTTPClient class to query the API endpoints and insert the into the Database.
At this point I encountered difficulty trying to get the Amazon, Apple and Alphabet stock information as I had not realised that the “Symbol“ Query parameter was representative of the equity (code) of the companies. I had only just managed to start development of code artefacts in TypeScript before my timer for the assignment expired. 


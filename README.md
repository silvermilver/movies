# CgnAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## INSTALL DEPENDENCY

Run 'npm install'. It gets all dependencies from npmjs.org, which are listed in package.json and place in node_modules in you machine locally.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## JSON server (Dev REST API)

`npm start` is running the command `"start": "concurrently --kill-others \"npx json-server --watch server/db.json\" \"ng serve --port 4200\""`  
That runs Development server as above and also runs the json-server at default port 3000.  
Json-server expose an API based on /server/db.json file.  
Example url: [http://localhost:3000/movies/](http://localhost:3000/movies/)

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `npm run testWithCoverage` to make coverage data.

Run `npm run checkCoverage` to check coverage.

## Running end-to-end tests

Run `npm start` before this.
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

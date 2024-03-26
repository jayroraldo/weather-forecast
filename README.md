# WEATHER FORECAST WEB APPLICATION (ANGULAR 17 + BOOTSTRAP + AUTH0)

This is a weather forecast web application that allows the user to login using GitHub account and displays the weather on the place searched.

## Get started

### Clone the repo

```shell
git clone [https://github.com/bryanforbes/intern-angular](https://github.com/jayroraldo/weather-forecast.git)
cd cd weather-forecast
```

### Install npm packages

Install the `npm` packages described in the `package.json` and verify that it works:

```shell
npm install
npm start
```

The `npm start` command builds (compiles TypeScript and copies assets) the application into `dist/`, watches for changes to the source files, and runs `vite-server` on port `4200`.

Shut it down manually with `Ctrl-C`.

#### npm scripts

These are the most useful commands defined in `package.json`:

* `npm start` - runs the TypeScript compiler, asset copier, and a server at the same time, all three in "watch mode".
* `npm run build` - runs the TypeScript compiler and asset copier once.
* `npm run watch` - runs the TypeScript compiler and asset copier in "watch mode"; when changes occur to source files, they will be recompiled or copied into `dist/`.

These are the test-related scripts:

* `npm test` - builds the application and runs Intern tests (both unit and functional) one time.

## Techniques

* RxJs for composing asynchronous and event-based programs by using observable sequences.
* Bootstrap 5.3 - open source front-end development framework for designing UI of the project
* Agnular Structural Design Pattern
* Auth0 for authentication and authorization platform

* ## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

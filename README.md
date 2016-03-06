# angular-webpack-es6

[![Dependency Status](https://david-dm.org/avihaymenahem/angular-webpack-es6/status.svg)](https://david-dm.org/avihaymenahem/angular-webpack-es6#info=dependencies) [![devDependency Status](https://david-dm.org/avihaymenahem/angular-webpack-es6/dev-status.svg)](https://david-dm.org/avihaymenahem/angular-webpack-es6#info=devDependencies)

The ultimate bundle for large-scale applications developed at [Clicktale](https://www.clicktale.com/) which includes the top notch technologies including:

* Complete webpack bundling with support for multiple file types.
* ES6, and ES7 support with babel.
* Source maps included in all builds.
* Development server with live reload.
* Production builds with cache busting.
* Testing environment using karma to run tests and jasmine as the framework.
* Code coverage when tests are run.
* No gulp and no grunt, just npm scripts.
* Sass loader to include files on js
* Assets versioning

>Warning: Make sure you're using the latest version of Node.js and NPM

### Quick start

> Clone/Download the repo then edit `app.js` inside [`/src/app/app.js`](/src/app/app.js)

```bash
# clone the repo
$ git clone https://github.com/avihaymenahem/angular-webpack-es6.git app

# change directory to your app
$ cd app

# install the dependencies with npm
$ npm install

# start the server
$ npm start
```

go to [http://localhost:8888](http://localhost:8888) in your browser.

# Table of Contents

* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Running the app](#running-the-app)
    * [Developing](#developing)
    * [Testing](#testing)
* [License](#license)

# Getting Started

## Dependencies

What you need to run this app:
* `node` and `npm` (Use [NVM](https://github.com/creationix/nvm))
* Ensure you're running Node (`v4.1.x`+) and NPM (`2.14.x`+)

## Installing

* `fork` this repo
* `clone` your fork
* `npm install` to install all dependencies

## Running the app

After you have installed all dependencies you can now run the app with:
```bash
npm start
```

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://localhost:8080`.

## Developing

### Build files

* single run: `npm run build`
* build files and watch: `npm run watch`

## Testing

#### 1. Unit Tests

* single run: `npm test`
* live mode (TDD style): `npm run test-watch`

# License

[MIT](/LICENSE)

# Credits
This project is based on several projects and ideas:
* [Angular Tips](https://github.com/preboot/angular-webpack)
* [Airbnb](https://github.com/airbnb/javascript)
* [NG Best Practices](https://medium.com/@lightingbeetle/some-best-practices-when-building-a-large-angular-application-c346734a4e9c#.hu01mlu3b)
* [John Papa](https://github.com/johnpapa/angular-styleguide)
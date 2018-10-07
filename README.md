# ebabel-text-sprite
[![Build Status](https://travis-ci.org/ebabel-games/ebabel-text-sprite.svg?branch=master)](https://travis-ci.org/ebabel-games/ebabel-text-sprite)

Create a 2D text sprite that can be added to any THREE.js mesh.

## Module install and usage in your game

### Install
```
npm install --save ebabel-text-sprite
```

### Usage
```
const { ebabelTextSprite } = require('ebabel-text-sprite');

const result = ebabelTextSprite();
```

## Development of this module
Fork this repository on Github, `git clone` your repository, checkout the develop branch, and when you are done, submit a pull request from your repository develop branch to this repository develop branch.

* fork this repository on github.com
* git clone your forked repository.
* git checkout develop

### First step when developing
```
npm install
```

### Run linting and unit tests
```
npm test
```

An html coverage report is to be found in the `coverage` folder.

### Generate documentation
```
npm run jsdoc
```

The generated documentation is to be found in the `docs` folder.

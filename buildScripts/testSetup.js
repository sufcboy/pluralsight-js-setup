// This file isn't transpiled, so must use commonJS and ES5

// Register babel to transpile our code before tests run.
require('babel-register')();

// Disable webpack features that Mocha doesn't understand.
require.extensions['.css'] = function() {

}

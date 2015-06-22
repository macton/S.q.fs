var Q = require('q');
var S = require('s');

S.qfs = require('../s.qfs');

S.qfs.stat( __dirname + '/test.js' ).then( function( stat ) {
  console.log( stat );
});

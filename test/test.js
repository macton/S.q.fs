var Q = require('q');
var S = require('s');

S.q    = require('s.q');
S.q.fs = require('../s.q.fs');

S.q.fs.stat( __dirname + '/test.js' ).then( function( stat ) {
  console.log( stat );
});

var S  = require('s');
var Q  = require('q');
var fs = require('fs');

var qfs = {
  stat     : function( filename ) { return Q.ninvoke( fs, 'stat', filename ); },
  saveUtf8 : S.curry( function( filename, text ) { return Q.ninvoke( fs, 'writeFile', filename, text, 'utf8' ); } ),
};

exports = module.exports = qfs;

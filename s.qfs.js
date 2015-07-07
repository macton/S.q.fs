var S  = require('s');
var Q  = require('q');
var fs = require('fs-extra');

var qfs = {
  stat       : function( filename ) { return Q.ninvoke( fs, 'stat', filename ); },
  outputFile : S.curry( function( filename, data ) { return Q.ninvoke( fs, 'outputFile', filename, data ); } ),
  readUtf8   : function( filename ) { return Q.ninvoke( fs, 'readFile', filename, {encoding: 'utf8'} ); },
  copy       : S.curry( function( src, dst ) { return Q.ninvoke( fs, 'copy', src, dst ); } ),
  remove     : function( path ) { return Q.ninvoke( fs, 'remove', path ); },
};

exports = module.exports = qfs;

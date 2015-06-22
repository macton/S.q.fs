var S  = require('s');
var Q  = require('q');
var fs = require('fs');

var qfs = {
  stat   : function( filename ) { return Q.ninvoke( fs, 'stat', filename ); },
};

exports = module.exports = qfs;

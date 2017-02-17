var imports = require(__dirname + '/exportsExample-1a');

console.log(imports);
console.log(imports + '\n====================');

imports.callMe('one argument');
imports.f();

// var otherImport = require('./exportsExample-1b');
// otherImport();
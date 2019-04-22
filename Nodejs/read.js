'use strict'
var fs = require("fs");
fs.readFile('./archivo.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

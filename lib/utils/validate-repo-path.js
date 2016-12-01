'use strict';

// Dependencies
const fs = require('fs');

module.exports = path => {
  fs.accessSync(path);
};

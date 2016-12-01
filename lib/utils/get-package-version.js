'use strict';

// Dependencies
const fs = require('fs');
const path = require('path');

module.exports = () => {
  const packagePath = path.resolve(__dirname, '..', '..', 'package.json');
  const packageFile = fs.readFileSync(packagePath);
  return JSON.parse(packageFile).version;
}
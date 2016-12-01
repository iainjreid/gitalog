'use strict';

// Dependencies
const program = require('commander');

// Utilities
const getPackageVersion = require('./utils/get-package-version');
const validateRepoPath = require('./utils/validate-repo-path');

program
  .version(getPackageVersion())
  .option('-p, --path [path/to/repo]', 'Specify a custom path', __dirname)
  .parse(process.argv);

validateRepoPath(program.path)

console.log(program.path)
'use strict';

// Dependencies
const Git = require('nodegit');
const program = require('commander');

// Utilities
const getPackageVersion = require('./utils/get-package-version');
const validateRepoPath = require('./utils/validate-repo-path');

program
  .version(getPackageVersion())
  .option('-p, --path [path/to/repo]', 'Specify a custom path', process.cwd())
  .option('-b, --branch [branch]', 'Specify a branch', 'master')
  .parse(process.argv);

validateRepoPath(program.path)

var getMostRecentCommit = function(repository) {
  console.log(repository)
  return repository.getBranchCommit(program.branch);
};

var getCommitMessage = function(commit) {
  return commit.message();
};

function error(e) {
  console.log(e)
}

Git.Repository.open(program.path)
  .then(getMostRecentCommit, error)
  .then(getCommitMessage)
  .then(function(message) {
    console.log(message);
  });
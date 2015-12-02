#!usr/bin/env node

// HCase object
var HCase = require("./HCase");

// The command of program
var program = require("commander");

// Options
program.version('0.0.1')
.usage('hcase [option]')
.option('-a, --all', "request all test cases")
.option('-l, --list', "show all test cases")
.option('-p, --page', 'show the results of test cases in browser');

// Help 通过监听---help来监听额外的帮助信息
program.on('--help', function() {
	console.log(' Examples:');
	console.log('');
	console.log('$ hcase --help');
	console.log('$ hcase -h');
	console.log('');
});

console.log("process>>" + process.argv);
// Command
program.command('hcase [caseName]', 'request case by name')
.command('hcase', 'default request all cases')
.parse(process.argv);
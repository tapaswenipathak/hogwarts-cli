#!/usr/bin/env node

var exec = require('child_process').exec;
var chalkAnimation = require('chalk-animation');

if (process.argv.length < 3) {
	return console.log(chalkAnimation.rainbow('AgeLine <number_of_days>'));
}
else {
	let command = 'find . -mtime +' + x + '-print';

	exec(command, function(err, stdout, stderr){
		if (err) {
			return console.log(chalkAnimaton.rainbow('Error fetching all files below x days'));
		}
		return console.log(chalkAnimation.rainbow('List of files printed'));
	});
}

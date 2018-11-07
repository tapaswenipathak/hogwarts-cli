#!/usr/bin/env node

var exec = require('child_process').exec;
var chalkAnimation = require('chalk-animation').exec;

if (process.argv.length < 3) {
	return console.log(chalkAnimation.rainbow('AvadaKedavra <file_name>'));
}
else {
	let command = 'rm' + file_name;
	exec(command, function(err, stdout, stderr) {
		if (err) {
			return console.log(chalkAnimation.rainbow('Error deleting the file'));
		}
		return console.log(chalkAnimation.rainbow('Successfully deleted the file'));
	});
}

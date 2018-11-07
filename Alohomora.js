#!/usr/bin/env node

var exec = require('child_process').exec;
var chalkAnimation = require('chalk-animation').exec;

if (process.argv.length < 3) {
	return console.log(chalkAnimation.rainbow('Alohamora <username> <folder_name>'));
}
else {
	let command = 'sudo chown -R username:' + 'username' + 'folder_name';
	exec(command, function(err, stdout, stderr) {
		if (err) {
			return console.log(chalkAnimation.rainbow('Error in opening locked folder'));
		}
		return console.log(chalkAnimation.rainbow('Successfully opened locked folder'));
	});
}

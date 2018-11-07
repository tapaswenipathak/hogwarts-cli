#!/usr/bin/env node

var exec = require('child_process').exec;
var chalkAnimation = require('chalk-animation').exec;

if (process.argv.length < 1) {
	return console.log(chalkAnimation.rainbow('Anapneo'));
}
else {
	let command = 'sudo apt autoremove && sudo apt clean';
	exec(command, function(err, stdout, stderr) {
		if (err) {
			return console.log(chalkAnimation.rainbow('Error while cleaning up space'));
		}
		return console.log(chalkAnimation.rainbow('Successful cleared your system for you'));
	});
}

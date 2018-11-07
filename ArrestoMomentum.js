#!/usr/bin/env node

var exec = require('child_process').exec;
var chalkAnimation = require('chalk-animation').exec;

if (process.argv.length < 3) {
	return console.log(chalkAnimation.rainbow('ArrestoMomentum'));
}
else {
	let command = '';
	exec(command, function(err, stdout, stderr) {
		if (err) {
			return console.log(chalkAnimation.rainbow('Error'));
		}
		return console.log(chalkAnimation.rainbow('Successful'));
	});
}

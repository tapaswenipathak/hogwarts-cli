#!/usr/bin/env node

var exec = require('child_process').exec;
var chalkAnimation = require('chalk-animation');

if (process.argv.length < 2) {
	return console.log(chalkAnimation.rainbow('Aberto <file_name>'));
}
else {
	let command = 'xdg-open' + file_name;
	exec(command, function(err, stdout, stderr){
		if(err){
			return console.log(chalkAnimation.rainbow('Error while opening the file'));
		}
		return console.log(chalkAnimation.rainbow('Successfully opened file.'));
	});
}

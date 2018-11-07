#!/usr/bin/env node

var exec = require('child_process').exec;
var chalkAnimation = require('chalk-animation');

if (process.argv.length < 3) {
  return console.log(chalkAnimation.rainbow('Aguamenti '))
}
else {
	let command = '';
	exec (command, function(err, stdout, stderr){
		if (err){
			console.log(chalkAnimation.rainbow('Errored'));
		}
		return console.log(chalkAnimation.rainbow('Successful'));
	});
}

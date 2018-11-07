#!/usr/bin/env node

var exec = require('child_process').exec;
var chalkAnimation = require('chalk-animation').exec;
var url = require('url');

if (process.argv.length < 3) {
	return console.log(chalkAnimation.rainbow('Accio <url> <string>'));
}
else {
	let url = '';
	let command = 'wget' + url;
	exec(command, function(err, stdout, stderr){
		if (err) {
			return console.log(chalkAnimation.rainbow('Error occured while fetching the URL'));
		}
		return console.log(chalkAnimation.rainbow('File download successful'));
	});
}


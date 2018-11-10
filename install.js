var exec = require('child_process').exec;
var spawn = require('child_process').spawn;
var os = require('os');
var chalkAnimation = require('chalk-animation');

console.log(os.type());
console.warn(chalkAnimation.Rainbow('Installation only works on Linux based distro'));

exec('which curl', function(err, stdout, stderr) {
	if (err) {
		console.log('curl is required to setup the project.');
		exec('which apt', function(err, stdout, stderr) {
			if(!stdout) {
				console.log(chalkAnimation.rainbow('Automatic installation isn\'t supported, install curl using your package manager'));
				process.exit(1);
			}
			else {
				console.log(chalkAnimation.rainbow('curl can be installed using	apt-get'));
				var cmd = spawn('sudo', ['apt', 'install', 'curl', '-y']);
				cmd.stdout.on('data', function(data){
					process.stdout.write(data);
				});
				cmd.stderr.on('data', function(data){
					process.stdout.write(data);
				});
				cmd.on('close', function(code){
					console.log(chalkAnimation.rainbow('curl installed successfully'));
					process.exit(0);
				});
			}
		});
	}
	else {
		process.exit(0);
	}
}


exec('which wget', function(err, stdout, stderr) {
	if (err) {
		console.log('wget is required to setup the project.');
		exec('which apt', function(err, stdout, stderr) {
			if(!stdout) {
				console.log(chalkAnimation.rainbow('Automatic installation isn\'t supported, install curl using your package manager'));
				process.exit(1);
			}
			else {
				console.log(chalkAnimation.rainbow('wget can be installed using	apt'));
				var cmd = spawn('sudo', ['apt', 'install', 'wget', '-y']);
				cmd.stdout.on('data', function(data){
					process.stdout.write(data);
				});
				cmd.stderr.on('data', function(data){
					process.stdout.write(data);
				});
				cmd.on('close', function(code){
					console.log(chalkAnimation.rainbow('wget installed successfully'));
					process.exit(0);
				});
			}
		});
	}
	else {
		process.exit(0);
	}
}

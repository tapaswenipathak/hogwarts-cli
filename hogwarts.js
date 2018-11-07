#!/usr/bin/env node

var chalkAnimation = require('chalk-animation');
var path = require('path');
var fs = require('fs-extra');

var heading = 'Say hello to hogwarts CLI!';
var spell = '';
var list = ['']

if (process.argv.length != 3) {
	figlet(heading, {font: 'Consolas'}, function(err, data){
		if (err){
			return console.log(chalkAnimation.rainbow(err));
		}
		else {
			console.log(chalkAnimation.rainbow(data));
			console.log(chalkAnimation.rainbow('Hogwarts Spells <SpellName> will show help\n'));
			console.log(chalkAnimation.rainbow('Following are the list of spells:\n'));
			console.log(chalkAnimation.rainbow.bold('- Aberto\n'));
			console.log(chalkAnimation.rainbow.bold('- Accio\n'));
			console.log(chalkAnimation.rainbow.bold('- Age Line\n'));
			console.log(chalkAnimation.rainbow.bold('- Aguamenti\n'));
			console.log(chalkAnimation.rainbow.bold('- Alarte Ascendare\n'));
			console.log(chalkAnimation.rainbow.bold('- Albus Dumbledore\'s Forceful Spell\n'));
			console.log(chalkAnimation.rainbow.bold('- Alohomora\n'));
			console.log(chalkAnimation.rainbow.bold('- Anapneo\n'));
			console.log(chalkAnimation.rainbow.bold('- Anteoculatia\n'));
			console.log(chalkAnimation.rainbow.bold('- Anti-Jinx\n'));
			console.log(chalkAnimation.rainbow.bold('- Anti-Cheating Spell\n'));
			console.log(chalkAnimation.rainbow.bold('- Anti-Disapparition Jinx\n'));
			console.log(chalkAnimation.rainbow.bold('- Antonin Dolohov\'s curse'));
			console.log(chalkAnimation.rainbow.bold('- Aparecium\n'));
			console.log(chalkAnimation.rainbow.bold('- Appare Vestigium\n'));
			console.log(chalkAnimation.rainbow.bold('- Apparate\n'));
			console.log(chalkAnimation.rainbow.bold('- Aqua Eructo\n'));
			console.log(chalkAnimation.rainbow.bold('- Arania Exumai\n'));
			console.log(chalkAnimation.rainbow.bold('- Arresto Momentum\n'));
			console.log(chalkAnimation.rainbow.bold('- Arrow-shooting spell\n'));
			console.log(chalkAnimation.rainbow.bold('- Ascendio\n'));
			console.log(chalkAnimation.rainbow.bold('- Avada Kedavra\n'));
			console.log(chalkAnimation.rainbow.bold('- Avifors\n'));
			console.log(chalkAnimation.rainbow.bold('- Avis\n'));
		}
	});
}

else {
	var spell = process.argv[2];
	if (spell === "Aberto") {
		Aberto();
	}
	else if (spell === "Accio") {
		Accio();
	}
	else if (spell === "Age Line") {
		AgeLine();
	}
	else if (spell === "Aguamenti") {
		Aguamenti();
	}
	else if (spell === "Alarte Ascendare") {
		AlarteAscendare();
	}
	else if (spell === "Albus Dumbledore's Forceful Spell") {
		AlbusDumbledoreForcefulSpell();
	}
	else if (spell === "Alohomora") {
		Alohomora();
	}
	else if (spell === "Anapneo") {
		Anapneo();
	}
	else if (spell === "Anteoculatia") {
		Anteoculatia();
	}
	else if (spell === "Anti Jinx") {
		AntiJinx();
	}
	else if (spell === "Anti-Cheating Spell") {
		AntiCheatingSpell();
	}
	else if (spell === "Anti-Disapparition Jinx") {
		AntiDisapparitionJinx();
	}
	else if (spell === "Antonin Dolohov's curse") {
		AntoninDolohovCurse();
	}
	else if (spell === "Aparecium") {
		Aparecium();
	}
	else if (spell === "Appare Vestigium") {
		AppareVestigium();
	}
	else if (spell === "Apparate") {
		Apparate();
	}
	else if (spell === "Aqua Eructo") {
		AquaEructo();
	}
	else if (spell === "Arania Exumai") {
		AraniaExumai();
	}
	else if (spell === "Arresto Momentum") {
		ArrestoMomentum();
	}
	else if (spell === "Arrow-shooting spell") {
		ArrowShootingSpell();
	}
	else if (spell === "Ascendio") {
		Ascendio();
	}
	else if (spell === "Avada Kedavra") {
		AvadaKedavra();
	}
	else if (spell === "Avifors") {
		Avifors();
	}
	else if (spell == "Avis") {
		Avis();
	}
	else {
		return console.log(chalkAnimation.rainbow('Spell not found!'));
	}
}

function Aberto() {
}


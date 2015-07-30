'use strict'

module.exports = function (object) {//get all of those properties into array
	var wordsToChoose = Object.keys(object); //pick random word
	var randomWordPick = wordsToChoose[Math.floor(Math.random()*wordsToChoose.length)]; //return that word in object
	return {word: randomWordPick}; //this is the JSON return, no more strings
};
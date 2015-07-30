'use strict'

module.exports = function(word, wordObject) {
	if (!wordObject.hasOwnProperty(word)) { //checks if word is NOT on object
		wordObject[word] = true;	//if not on object, add and send message that it was sent
		return {message: 'thanks, ' + word + ' was added to our list'};
	}; // from js front end JSON object 
	return {message: 'we already have ' + word + ' in our list'}; // if it is on the ojbect, send polite thankyou
	};

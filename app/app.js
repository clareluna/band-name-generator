'use strict';

$(function() {
	$('#name').click(function() {
		$.get('adjective', function(response) {
			var adjective = response.word; //.word is a property 
			$('#adjective').text(adjective); //text jQuery function adds text to HTML
		});
		$.get('verb', function(response) {
			var verb = response.word; 
			$('#verb').text(verb); 
		});
		$.get('noun', function(response) {
			var noun = response.word; 
			$('#noun').text(noun); 
		});	
	});// need ajax to get a function to go ask server for info, give it a place to go and function
});


// make an event handler that  that when the buffon is clicked sends a post request to server
$('#submitWords').on('submit', function(e){ //e = event 
	e.preventDefault(); // this is important to stop browser from reloading page before response
	//get text entered in text box, save to variable 
	var adjective = $('input[name=adjective').val()//selects the name (jquery) attribute put on the input box
	var adjectivePost; //cant send string to back end must be JSON

	if(adjective) {
		adjectivePost = {word: adjective};
		$.post('adjective', adjectivePost, function(response) { //post request means that you are already carrying JSON info back to server
			var adjectiveRes = response.message; //setting your server response with a message property
			$('#adjectiveRes').text(adjectiveRes); //
		});
	};

	var verb = $('input[name=verb').val()
	var verbPost; 
	if(verb) {
		verbPost = {word: verb};
		$.post('verb', verbPost, function(response) {
			var verbRes = response.message; 
			$('#verbRes').text(verbRes); 
		});
	};

	var noun = $('input[name=noun').val()
	var nounPost; 
	if(noun) {
		nounPost = {word: noun};
		$.post('noun', nounPost, function(response) { 
			var nounRes = response.message; 
			$('#nounRes').text(nounRes); 
		});
	}			
});

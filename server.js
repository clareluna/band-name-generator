'use strict';

var express = require('express');
var app = express();
var bodyparser = require('body-parser'); // usally put all module requirements at the top
var Adjective = require('./lib/adjectives.js'); //whatever comes out of adjective files (will attepmt node modeles first)
var Noun = require('./lib/nouns.js');
var Verb = require('./lib/verbs.js');
var getRandomWord = require('./lib/getRandomWord.js');
var postRandomWord = require('./lib/postRandomWords.js');
var port = process.env.PORT || 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true
})); //dont understand, just remember to code this from thing to thing
app.use(express.static(__dirname + "/app/"));
//gives app access to express server that is static
//the dual underscore dirname says start here in the '/app/' folder


var adjective = new Adjective ();

var noun = new Noun ();

var verb = new Verb ();


app.get('/adjective', function(req, res) {
	res.json(getRandomWord(adjective));
});

app.post('/adjective', function(req, res) {
	res.json(postRandomWord(req.body.word, adjective));
});	

app.get('/verb', function(req, res) {
	res.json(getRandomWord(verb));
});

app.post('/verb', function(req, res) {
	res.json(postRandomWord(req.body.word, verb));
});	

app.get('/noun', function(req, res) {
	res.json(getRandomWord(noun));
});

app.post('/noun', function(req, res) {
	res.json(postRandomWord(req.body.word, noun));
});

app.get('/', function(req, res) {
	res.sendFile('index.html');
});

app.listen(port, function() {
	console.log('server started on port ' + port);
});
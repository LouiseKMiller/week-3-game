

var words = ["transporter", "nebula", "photon torpedos", "klingon", "enterprise", "jeffries tube", "spacial anomaly", "dilithium", "tricorder", "stardate", "prime directive", "cloaking device", "holodeck", "tribble", "borg collective", "shuttlecraft"];
var triesSoFar = 0;
var allGuesses = [];
var userWordArray = [];
var currentWordString = words[0];
var currentWordArray = createArray(words[0]);
var userGuess;

function validInput() {
	var x;
	x = ((allGuesses.includes(userGuess) == false) && (userGuess.charCodeAt(0) > 96) && (userGuess.charCodeAt(0) < 123));
	return x;
}

function createArray(argString) {
	var argArray = [];
	for (i=0; (i<argString.length); i++) {
		argArray[i] = argString.charAt(i);
	}
	return argArray;
}

function update(userGuess, currentWordArray) {
	for (i=0; (i < words[0].length); i++) {
		if (userGuess == currentWordArray[i]) userWordArray[i]=userGuess;
	}
	return userWordArray;
}

function initUserWord() {
	var x=[];
	for (i=0; (i < words[0].length); i++) {
		if (words[0].charCodeAt[i]==32) x[i] = " ";

		else x[i]= "_";
	}
	return x;
}
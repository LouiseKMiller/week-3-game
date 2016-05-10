
var test = "test";
var hmgame = {
	words : ["transporter", "nebula", "photon torpedos", "klingon", "enterprise", "jeffries tube", "spacial anomaly", "dilithium", "tricorder", "stardate", "prime directive", "cloaking device", "holodeck", "tribble", "borg collective", "shuttlecraft"],
	triesSoFar : 0,
	allGuesses : [],
	userWordArray : [],
	roundNum : 0,

	currentWord : function () {
			  return (this.words[this.roundNum]);
			},
	

// checks userGuess to see if it is a letter and if user has already guessed the letter


	validInput : function () {
				return ((this.allGuesses.includes(userGuess) == false) && (userGuess.charCodeAt(0) > 96) && (userGuess.charCodeAt(0) < 123));
				},

// 	createArray : function (argArray) {
//				var argArray = [];
//				for (var i=0; (i<argString.length); i++) {
//					argArray[i] = argString.charAt(i);
//				}
//				return argArray;
//				},
//
// updates userWordArray with correct guess
//
	updateWord	: function () {
				var localWord = this.currentWord();
				console.log(localWord);
				for (var i=0; (i < localWord.length); i++) {
					if (userGuess.charCodeAt(0) == localWord.charCodeAt(i))
						this.userWordArray[i]=userGuess;
					}
				},
//
// initializes userWord to match length of currentWord, insert spaces, and replace letters with underscores
//
	initUserWord : function() {
				for (var i=0; (i < this.currentWord().length); i++) {
					if (this.currentWord().charCodeAt[i]==32) this.userWordArray[i] = " ";
					else this.userWordArray[i]= "_";
					}
				return this.userWordArray;
				},

}
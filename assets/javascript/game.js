
var hmgame = {
	words : ["test", "photon torpedo", "transporter", "nebula", "klingon", "enterprise", "jeffries tube", "spacial anomaly", "dilithium", "tricorder", "stardate", "prime directive", "cloaking device", "holodeck", "tribble", "borg collective", "shuttlecraft"],
	triesRemain : 12,
	allGuesses : [],
	userWordArray : [],
	userWordString : "",
	roundNum : 0,
	winCount : 0,

	currentWord : function () {
			  return (this.words[this.roundNum]);
			},
	

// checks userGuess to see if it is a letter and if user has already guessed the letter


	validInput : function () {
				return ((this.allGuesses.includes(userGuess) == false) && (userGuess.charCodeAt(0) > 96) && (userGuess.charCodeAt(0) < 123));
				},

	updateWord	: function () {
				var localWord = this.currentWord();
				for (var i=0; (i < localWord.length); i++) {
					if (userGuess.charCodeAt(0) == localWord.charCodeAt(i))
						this.userWordArray[i]=userGuess;
					}
				},
// updates userWordArray with correct guess
//
	displayWord	: function (localTag,localString) {
				var htmlWord1 = (localString);
				document.querySelector(localTag).innerHTML = htmlWord1;
				},
//
// initializes userWord to match length of currentWord, insert spaces, and replace letters with underscores
//
	initUserWord : function() {
				for (var i=0; (i < this.currentWord().length); i++) {
					if (this.currentWord().charCodeAt(i)==32) this.userWordArray[i] = "&nbsp";
					else this.userWordArray[i]= "_";
					}
				return this.userWordArray;
				},
//
// starts new game
//
	newGame : function() {
			this.roundNum++;
			this.triesRemain = 12;
			this.displayWord('#triesLeft', this.triesRemain);
			this.allGuesses = [];
			this.displayWord('#guessList', 'None Yet!');
			this.userWordArray = [];
			this.userWordArray = this.initUserWord();
			this.displayWord('#word', this.userWordArray.join(" "));

	}

}
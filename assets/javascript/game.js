
var hmgame = {
	words : [["borg collective", "assets/images/borg.jpg"], 
			["photon torpedo", "assets/images/photon.jpg"],
			["transporter", "assets/images/transporter.jpg"],
			["nebula", "assets/images/nebula.jpg"],
			["klingon", "assets/images/klingon.jpg"],
			["enterprise", "assets/images/enterprise.jpg"],
			["jeffries tube", "assets/images/tube.jpg"],
			["spacial anomaly", "assets/images/anomaly.jpg"],
			["dilithium", "assets/images/dilithium.jpg"],
			["tricorder", "assets/images/tricorder.jpg"],
			["stardate", "assets/images/stardate.png"],
			["prime directive", "assets/images/prime.jpg"],
			["cloaking device", "assets/images/cloak.jpg"],
			["holodeck", "assets/images/holodeck.jpg"],
			["tribbles", "assets/images/tribbles.jpg"],
			["shuttlecraft", "assets/images/shuttle.jpg"]],
	triesRemain : 12,
	allGuesses : [],
	userWordArray : [],
	userWordString : "",
	roundNum : 0,
	winCount : 0,

	currentWord : function () {
			  return (this.words[this.roundNum][0]);
			},
	currentWinPic : function () {
			return (this.words[this.roundNum][1]);

			},
	
//
// initializes userWord to match length of currentWord, insert spaces, and replace letters with underscores
//
	initUserWord : function() {
				for (var i=0; (i < this.currentWord().length); i++) {
					if (this.currentWord().charCodeAt(i)==32) this.userWordArray[i] = " ";
					else this.userWordArray[i]= "_";
					}
				return this.userWordArray;
				},

//
// checks userGuess to see if it is a letter and if user has already guessed the letter
//
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
//
// updates HTML document with new string
//
	displayWord	: function (localTag,localString) {
				var htmlWord1 = localString;
				document.querySelector(localTag).innerHTML = htmlWord1;
				},
//
// update the picture to match winning word
//
	displayPic : function (localTag,localPic) {
				var htmlPic = localPic;
				document.getElementById(localTag).src = htmlPic;
				},
//
// sounds
//
	soundAlarm : function () {
				var audio = new Audio('assets/sounds/alarm03.mp3');
				audio.play();
				},
	soundWin : function () {
				var audio = new Audio('assets/sounds/affirmative.mp3');
				audio.play();
				},
//
// user wins a game
//
	winGame : function () {
			this.soundWin();
			this.winCount++;
			this.displayWord('#wins', this.winCount);
			this.displayWord('#answer',this.currentWord());
			this.displayPic('winPic',this.currentWinPic());
			this.newGame();
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
			this.displayWord('#word', this.userWordArray.join("&nbsp"));

	}

}
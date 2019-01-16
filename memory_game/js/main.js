console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var checkForMatch = function () {
	if (cardsInPlay.length === 2){
		if (cardsInPlay[0] === cardsInPlay[1]){
			alert("You found a match!");
		}
		else {
			alert("Sorry, try again.");
		}
	}	
}
var flip = function (cardId) {
	console.log("User has flipped " + cards[cardId]);
	cardsInPlay.push(cardId);
	checkForMatch();
}

flip(0);
flip(2);

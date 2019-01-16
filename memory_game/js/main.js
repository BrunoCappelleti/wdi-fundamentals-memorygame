console.log("Up and running!");

var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];
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
	console.log("User has flipped " + cards[cardId].rank + " of " + cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	checkForMatch();
}

flip(0);
flip(2);

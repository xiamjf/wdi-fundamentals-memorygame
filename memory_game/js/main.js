console.log("Up and running!");
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
var cards = ["queen","queen","king","king"];
var cardsInPlay = [];
var cardOne;
cardOne = cards[0];
cardsInPlay.push(cardOne);
var cardTwo;
cardTwo = cards[2];
cardsInPlay.push(cardTwo);
if (cardsInPlay.length === 2){
	if (cardsInPlay[0]===cardsInPlay[1]) {
		alert("You found a match!");
	}
	else {
		alert("Sorry, try again.");
	 }

}
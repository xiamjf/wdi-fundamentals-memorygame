console.log("Up and running!");
//This tells you which cards are in the deck
var cards = ["queen", "queen", "king", "king"];
/*I am not sure what this command does, I think it tells 
you what cards the user has clicked on*/
var cardsInPlay = [];
/*this says cardsInPlay is a variable that 
contains an empty list*/

/*This function checks if the cards match*/
var checkForMatch = function(){
	if (cardsInPlay[0]===cardsInPlay[1]){
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
};
/*Now I will create a function to store all steps
that happen when the user flips a card*/
//I put all the info for pushing the cards into the lists
//into the function, leaving the lists themselves out
var flipCard = function(cardID){
	//var cardOne = cards[0];
	/*Now the new variable cardOne is the first element
	of the cards variable list, replaces the "queen"*/
	//cardsInPlay.push(cardOne);
	/*The push command adds cardOne to the previously empty
	cardsInPlay list*/
	//console.log("User flipped " + cardOne); this is 
	//being changed to the following:
	checkForMatch();
	console.log("User flipped " + cards[cardID]);
	cardsInPlay.push(cards[cardID]);
	//var cardTwo = cards[2];
	/*I do not follow this logic
	Why are we checking for the 1st and 3rd cards?
	What does push even mean bruh? This was the section
	before functions in the pre-work. Like are you saying that 
	card 2 is definitely a king?
	I need to review this*/
	//cardsInPlay.push(cardTwo);
	//console.log("User flipped " + cardTwo);
	/*if (cardsInPlay.length===2){
		if (cardsInPlay[0]===cardsInPlay[1]) {
		alert("You found a match!");
		};
		else {
			alert("Sorry, try again.");
	 	};*/
	//the above if statement is now a function to check 	
	};
flipCard(0);
flipCard(2);	


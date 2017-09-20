/*Guessing Game by Cherylann Skrocki*/

/*Intitialize Global variables*/
var totalTurns = 0;
var games = 0;
var average = 0;
var playAgain = "y";

// alert("totalTurns " + totalTurns + " games " + games + " average " +average + " playagain " + playAgain)

//start playing

do{ //while playAgain == "y"
	games++;
	var answer = Math.floor(Math.random() * (99) + 1);
	alert(answer);
	turns = 0;
	do {
		turns++;
		guess = prompt("Guess a number between 1-100." + " You're on turn " + turns);
		if (guess > answer){
			alert("too high");
		}else if (guess < answer){
			alert("too low");
		}else if (isNaN (guess)){
			turns = turns - 1;
			playAgain = prompt("Type anything in the box to continue");
			if (playAgain != "y"){
				alert("enter number not letter")
			}
		}
	}
	while (guess != answer);
	alert("Congratulations");
	alert("It took you " + turns + " turns")
	playAgain = prompt("Would you like to play again? y=Yes");
	
	totalTurns = turns + totalTurns;
	average = totalTurns / games;
}
while (playAgain == "y");
alert("You played " + games + " games" + " You're average number of turns is " + average);
//End playing
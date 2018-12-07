//variables
var player1Score = 0;
var player2Score = 0;
var gameover = false;  //check if game is over or not by checking a player's score is euqual to the winning score
var winningScore = 5;


//selectors for player 1 
var span1 = document.querySelector("span");
var button1 = document.querySelector("button");

//selectors for player 2 
var span2 = document.getElementById("pl2");
var button2 = document.getElementById("p2");

//selectors for the game reset
var gameReset = document.getElementById("reset");

//select our input box in order to control the max score
//in this example we have only one type=number but here is the syntax if we have more
var maxScore = document.querySelector("input[type = 'number']");

//selector for the other alone span
var spanMax = document.getElementById("max");

//when player1 button is clicked
button1.addEventListener("click", function(){
	if (!gameover) {
		player1Score++;
		if (player1Score >= winningScore) {
			span1.classList.add("winner");
			gameover = true;
	}
	span1.textContent = player1Score;
	}

	
});


//when player 2 button is clicked
button2.addEventListener("click", function(){
	if (!gameover) {
		player2Score++;
		if (player2Score >= winningScore) {
			span2.classList.add("winner");
			gameover = true;
		}
		span2.textContent = player2Score;
	}

});


//when reset button is clicked
gameReset.addEventListener("click", function(){
	player1Score = 0 ;
	player2Score= 0;
	span1.textContent = 0;
	span2.textContent=0;
	span1.classList.remove("winner");
	span2.classList.remove("winner");
	gameover=false;

});

//when the input box is changed
//the click event is not the best here since we dont have to clcik
//we can just type a number; so best event is change
maxScore.addEventListener("change", function(){
	spanMax.textContent = maxScore.value;
	winningScore = maxScore.value;
})
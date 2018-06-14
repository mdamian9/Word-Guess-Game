var comChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var displayWin = document.getElementById("win-id");
var displayLoss = document.getElementById("loss-id");
var displayGuessLeft = document.getElementById("left-id");
var displayGuess = document.getElementById("guesses-id");
var wins = 0;
var loss = 0;
var numGuesses = 5;

function checkLetter(str) {
    var flag = true;
    if (!(/[a-z]/i.test(str) && str.length == 1)) {
        flag = false;
    }
    return flag;
}

if (numGuesses > 0) {
    document.onkeyup = function (event) {
        // Determines which key was pressed.
        var userGuess = event.key;

        // Just a quick console log check to see if the function is returning what I want. When this line of code is run I get the error
        checkLetter(userGuess);
        console.log(checkLetter(userGuess));

        if (checkLetter(userGuess)) {
            numGuesses--;
            displayGuessLeft.textContent = numGuesses;
            var comGuess = comChoices[Math.floor(Math.random() * comChoices.length)]; // Random guess assigned to comGuess from array
            console.log(userGuess); // Quick console check for userGuess
            console.log(comGuess); // Quick console check for comGuess

            displayGuess.textContent = displayGuess.textContent + " " + userGuess;

            if (userGuess === comGuess) {
                wins++;
                displayWin.textContent = wins;
            } else {
                loss++;
                displayLoss.textContent = loss;
            }
        } else {
            alert("You did not pick an alphabetical letter! Try again!");
        }

        console.log(numGuesses);

    }
} else if (numGuesses <= 0) {
    alert("You have 0 guesses left. The game is over! Refresh the page to play again!");
}
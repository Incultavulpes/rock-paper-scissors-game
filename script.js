// Rock, paper, scissors game

/* First we build a function to generate the computer choice, this will be rock, paper or scissors. We generate it with random numbers
        INPUT: WITHOUT ANY
        OUTPUT: choiceComputer
*/
function getComputerChoice() {
    // Let's generate a number between 0 and 1 and store it into generatedNumber, the number is random (or at least pseudorandom) at this stage
    let generatedNumber = Math.random();
    let choiceComputer = "";
    // We're going to assign different intervals to either rock, paper or scissors
    if (generatedNumber > 0.6) {
        choiceComputer = "scissors";
    } else if (generatedNumber < 0.3) {
        choiceComputer = "rock";
    } else {
        choiceComputer = "paper";
    }
    return choiceComputer;
}

// We're creating now one round of the game

function round() {
    // First we get the choice of the computer rock, paper or scissors, wi give its value to a variable
    let choiceComputer = getComputerChoice();
    // Second we get the player's choice rock, paper or scissors
    let choicePlayer = prompt("Choose between the rock, paper and the scissors");
    let choiceWinner = null;
    // If we need to compare it to rock paper and scissors we need to make choicePlayer insensitive to case, we'll convert the choice to lower case in this case
    choicePlayer = choicePlayer.toLowerCase();
    // Using the comparison function we know the winner
    choiceWinner = multipleChoiceCompareProtocol(choiceComputer, choicePlayer);
    console.log(`The computer choice is ${choiceComputer}`);
    console.log(`The player choice is ${choicePlayer}`);
    console.log(choiceWinner);
    return choiceWinner;
}

/* We create a function to know the winner
    INPUT: choiceComputer (the computer's choice), choicePlayer (the player's choice) only
    OUTPUT: choiceWinner (the game's winner) only
We'll solve the problem with a switch on computerChoice
*/

function multipleChoiceCompareProtocol(choiceComputer, choicePlayer) {
    let choiceWinner = " ";
    switch (choiceComputer) {
        case "rock":
            switch (choicePlayer) {
                case "rock":
                    choiceWinner = "Draw!!";
                    break;
                case "paper":
                    choiceWinner = "You're the winner!!";
                    break;
                case "scissors":
                    choiceWinner = "You're the loser!!";
                    break;
                default:
                    choiceWinner = "There was an error";
            }
            break;
        case "paper":
            switch (choicePlayer) {
                case "rock":
                    choiceWinner = "You're the loser!!"; 
                    break;
                case "paper":
                    choiceWinner = "Draw!!";
                    break;
                case "scissors":
                    choiceWinner = "You're the winner!!";
                    break;
                default:
                    choiceWinner = "There was an error";
            }
            break;
        case "scissors":
            switch (choicePlayer) {
                case "rock":
                    choiceWinner = "You're the winner!!";
                    break;
                case "paper":
                    choiceWinner = "You're the loser!!";
                    break;
                case "scissors":
                    choiceWinner = "Draw!!";
                    break;
                default:
                    choiceWinner = "There was an error";
            }
            break;
        default:
            choiceWinner = "There was an error";
    }
    return choiceWinner;
}

// We write here the core of our game, it will be a loop, it will do only five iterations and we're using a for loop, together with a new score function now

let scorePlayer = 0;
let scoreComputer = 0;
let choiceWinner = null;
let scoreVariable = [scorePlayer, scoreComputer];

for (i = 1; i <= 5 ; i++) {
    choiceWinner = round();
    scoreVariable = score(choiceWinner, scoreVariable);
}

console.log(`---------------------------------`);
console.log(`SCORE`);
console.log(`The computer score is ${scoreVariable[1]}`);
console.log(`The player score is ${scoreVariable[0]}`);
if (scoreVariable[0] > scoreVariable[1]) {
    console.log("You win");
} else if (scoreVariable[0] < scoreVariable[1]){
    console.log("You lose");
} else {
    console.log("Nice draw");
}
console.log(`---------------------------------`);


/* We're creating a good score function
        INPUTS: chiceWinner
        OUTPUTS: player score, computer score together in a variable score = [player score, computer score]
   Now we're going to see what is inserted in the choiceWinner, we're going to see if it contains winner loser or if it contains draw, let's build this
*/

function score(choiceWinner, scoreVariable) {
    if (choiceWinner.includes("winner") || choiceWinner.includes("Draw")) {
        scoreVariable[0] = scoreVariable[0] + 1;
    }
    if (choiceWinner.includes("loser") || choiceWinner.includes("Draw")) {
        scoreVariable[1] = scoreVariable[1] + 1;
    }
    return scoreVariable;
}



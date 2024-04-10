// Rock, paper, scissors game

function getComputerChoice() {
    let generatedNumber = Math.random();
    let choiceComputer = "";
    if (generatedNumber > 0.6) {
        choiceComputer = "scissors";
    } else if (generatedNumber < 0.3) {
        choiceComputer = "rock";
    } else {
        choiceComputer = "paper";
    }
    return choiceComputer;
}

function round() {
    let choiceComputer = getComputerChoice();
    let choiceWinner = null;
    // Using the comparison function we know the winner
    choiceWinner = multipleChoiceCompareProtocol(choiceComputer, choicePlayer);
    console.log(`The computer choice is ${choiceComputer}`);
    console.log(`The player choice is ${choicePlayer}`);
    console.log(choiceWinner);
    return choiceWinner;
}

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

let scorePlayer = 0;
let scoreComputer = 0;
let choiceWinner = null;
let scoreVariable = [scorePlayer, scoreComputer];

/*
for (i = 1; i <= 5 ; i++) {
    choiceWinner = round();
    scoreVariable = score(choiceWinner, scoreVariable);
}
*/

const btnRock = document.querySelector(".one .button");
const btnPaper = document.querySelector(".two .button");
const btnScissors = document.querySelector(".three .button");

// Argument problem may be solved by object event, write all the things necessary for this finality

btnRock.addEventListener("click", function () {
    choicePlayer = "rock";
    choiceWinner = round();
    scoreVariable = score(choiceWinner, scoreVariable);
});
btnPaper.addEventListener("click", function () {
    choicePlayer = "paper";
    choiceWinner = round();
    scoreVariable = score(choiceWinner, scoreVariable);
});
btnScissors.addEventListener("click", function () {
    choicePlayer = "scissors";
    choiceWinner = round();
    scoreVariable = score(choiceWinner, scoreVariable);
});

/*
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

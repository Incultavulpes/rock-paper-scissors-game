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

const btnRock = document.querySelector(".one .button");
const btnPaper = document.querySelector(".two .button");
const btnScissors = document.querySelector(".three .button");

const textPerson = document.querySelector(".person .sc");
const textComputer = document.querySelector(".computer .sc");

const gameResultDisplay = document.querySelector(".game-result");

const initialize = function (e) {
    choicePlayer = e.target.textContent.toLowerCase();
    choiceWinner = round();
    scoreVariable = score(choiceWinner, scoreVariable);
    contemporaryPunctuation (textPerson, textComputer, scoreVariable);
    stopGame(scoreVariable);
}

function contemporaryPunctuation (textPerson, textComputer, scoreVariable) {
    textPerson.textContent = scoreVariable[0];
    textComputer.textContent = scoreVariable[1];
}

function stopGame (scoreVariable) {
    if (scoreVariable[0] >= 5 || scoreVariable[1] >= 5) {
        btnRock.removeEventListener("click", initialize);
        btnPaper.removeEventListener("click", initialize);
        btnScissors.removeEventListener("click", initialize);
        if (scoreVariable[0] > scoreVariable[1]) {
            gameResultDisplay.textContent = "You win";
        } else if (scoreVariable[0] < scoreVariable[1]){
            gameResultDisplay.textContent = "You lose";
        } else {
            gameResultDisplay.textContent = "Nice draw";
        }
    }
}

btnRock.addEventListener("click", initialize);
btnPaper.addEventListener("click", initialize);
btnScissors.addEventListener("click", initialize);

function score(choiceWinner, scoreVariable) {
    if (choiceWinner.includes("winner") || choiceWinner.includes("Draw")) {
        scoreVariable[0] = scoreVariable[0] + 1;
    }
    if (choiceWinner.includes("loser") || choiceWinner.includes("Draw")) {
        scoreVariable[1] = scoreVariable[1] + 1;
    }
    return scoreVariable;
}

const humanSelection = document.querySelector("#buttonsContainer");
buttonsContainer.addEventListener("click", (event) => {
    const target = event.target;

    switch(target.id) {
        case "rock":
            playRound("rock", getComputerChoice());
            break;
        case "paper":
            playRound("paper", getComputerChoice());
            break;
        case "scissors":
            playRound("scissors", getComputerChoice());
            break;
    }
});

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function getComputerChoice() {
    const randomInt = getRandomIntInclusive(1, 9);

    if (randomInt >= 1 && randomInt <= 3) {
        return "rock";
    } else if (randomInt >= 4 && randomInt <= 6) {
        return "paper";
    } else {
        return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;
const results = document.querySelector("#results");
const roundResult = document.createElement("div");
const currentScore = document.createElement("div");

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
        results.textContent = "You lose! Paper beats Rock.";
        results.appendChild(roundResult);
        ++computerScore;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        results.textContent = "You win! Rock beats scissors.";
        results.appendChild(roundResult);
        ++humanScore;
    } else if (humanChoice === "rock" && computerChoice === "rock") {
        results.textContent = "Tie! Rock twinsies. Nobody scores.";
        results.appendChild(roundResult);
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        results.textContent = "You win! Paper beats Rock."
        results.appendChild(roundResult);
        ++humanScore;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        results.textContent = "You lose! Scissors beats Paper."
        results.appendChild(roundResult);
        ++computerScore;
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        results.textContent = "Tie! Paper twinsies. Nobody scores."
        results.appendChild(roundResult);
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        results.textContent = "You lose! Rock beats Scissors."
        results.appendChild(roundResult);
        ++computerScore;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        results.textContent = "You win! Scissors beats Paper."
        results.appendChild(roundResult);
        ++humanScore;
    } else {
        results.textContent = "Tie! Scissors twinsies. Nobody scores."
        results.appendChild(roundResult);
    }

    currentScore.textContent = 
        "Current score: " + "You " + humanScore + 
        ", Computer " + computerScore;
    results.appendChild(currentScore);

    if (humanScore === 5) {
        results.textContent = "You win! " + humanScore + " to " + computerScore;
        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 5) {
        results.textContent = "You lose! " + computerScore + " to " + humanScore;
        humanScore = 0;
        computerScore = 0;
    }
}

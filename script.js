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

function getHumanChoice() {
    let choice = prompt("Input your choice of rock, paper, or scissors...");

    choice = choice.toLowerCase();

    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice
    } else {
        alert("That is not a valid response. Try again...");
        return getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock.")
        ++computerScore;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors.");
        ++humanScore;
    } else if (humanChoice === "rock" && computerChoice === "rock") {
        console.log("Tie! Rock twinsies. Nobody scores.");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock.");
        ++humanScore;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper.");
        ++computerScore;
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        console.log("Tie! Paper twinsies. Nobody scores.");
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors.");
        ++computerScore;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper.");
        ++humanScore;
    } else {
        console.log("Tie! Scissors twinsies. Nobody scores.");
    }
}
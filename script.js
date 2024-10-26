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
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
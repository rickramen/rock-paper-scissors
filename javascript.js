var humanScore = 0;
var computerScore = 0;


function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

 
function getHumanChoice() {
    const validChoices = ["rock", "paper", "scissors"];
    let choice = prompt("Choose Rock, Paper, or Scissors", "").toLowerCase().trim();

    while (!validChoices.includes(choice)) {
        alert("Invalid Choice.");
        choice = prompt("Choose Rock, Paper, or Scissors", "").toLowerCase().trim();
    }

    return choice;
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return `You: ${humanChoice}. Computer: ${computerChoice}. 
        It's a draw!`;
    }

    // Win conditions
    const winMap = {
        rock: "scissors",
        scissors: "paper",
        paper: "rock"
    };

    if (winMap[humanChoice] === computerChoice) {
        humanScore++;
        return `You: ${humanChoice}. Computer: ${computerChoice}
        You win this round!`;
    } else {
        computerScore++;
        return `You: ${humanChoice}. Computer: ${computerChoice}
        Computer wins this round!`;
    }
  }
  
for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);

    console.log(result);
    console.log(`Round ${i + 1}: Human Score: ${humanScore}. Computer Score: ${computerScore}`);
}

if (humanScore > computerScore) {
    console.log("You won the match");
} else if (computerScore > humanScore) {
    console.log("Computer wins!");
} else {
    console.log("The game is a draw!");
}
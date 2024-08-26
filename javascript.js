var humanScore = 0;
var computerScore = 0;

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
 

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        displayResult(`You: ${humanChoice}. Computer: ${computerChoice}. It's a draw!`);
        return;
    }
    
    const winMap = {
        rock: "scissors",
        scissors: "paper",
        paper: "rock"
    };
        
    if (winMap[humanChoice] === computerChoice) {
        humanScore++;
        displayResult(`You: ${humanChoice}. Computer: ${computerChoice}. You win this round!`);
    } else {
        computerScore++;
        displayResult(`You: ${humanChoice}. Computer: ${computerChoice}. Computer wins this round!`);
    }

    updateScores();
    // Delay of 500ms (0.5 seconds) to see final results
    setTimeout(checkForWinner, 500); 
  }

function displayResult(message) {
    document.getElementById('result').textContent = message;
}

function updateScores() {
    document.getElementById('humanScore').textContent = humanScore;
    document.getElementById('computerScore').textContent = computerScore;
}

function checkForWinner() {
    if (humanScore === 5) {
        alert("Congratulations! You won the match!");
        resetGame();
    } else if (computerScore === 5) {
        alert("Computer wins the match!");
        resetGame();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    updateScores();
}
  
document.getElementById('rock-btn').addEventListener('click', () => playRound('rock', getComputerChoice()));
document.getElementById('paper-btn').addEventListener('click', () => playRound('paper', getComputerChoice()));
document.getElementById('scissors-btn').addEventListener('click', () => playRound('scissors', getComputerChoice()));


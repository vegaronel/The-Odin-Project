let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else {
    return "scissor";
  }
}

function getHumanChoice() {
  const choice = prompt("Enter your choice.");
  return choice.toLocaleLowerCase();
}

function playRound(computerChoice, humanChoice) {
  if (computerChoice === "rock" && humanChoice === "paper") {
    computerScore++;
    console.log("Human: " + humanChoice + " Computer: " + computerChoice);
    return "Computer Wins";
  } else if (computerChoice === "rock" && humanChoice === "scissor") {
    console.log("Human: " + humanChoice + " Computer: " + computerChoice);
    computerScore++;
    return "Computer Wins";
  } else if (computerChoice === "scissor" && humanChoice === "paper") {
    console.log("Human: " + humanChoice + " Computer: " + computerChoice);
    computerScore++;
    return "Computer Wins";
  } else if (computerChoice === humanChoice) {
    console.log("Human: " + humanChoice + " Computer: " + computerChoice);
    return "It's a tie";
  } else {
    console.log("Human: " + humanChoice + " Computer: " + computerChoice);
    humanScore++;
    return "Human Wins";
  }
}

for (let i = 0; i < 5; i++) {
  const computerChoice = getComputerChoice();
  const humanChoice = getHumanChoice();
  const result = playRound(computerChoice, humanChoice);
  console.log(
    result +
      "\nScore: Human: " +
      humanScore +
      " Computer: " +
      computerScore +
      "\n   "
  );
}

if (humanScore > computerScore) {
  console.log("The winner is: Human");
} else {
  console.log("The winner is: Computer");
}

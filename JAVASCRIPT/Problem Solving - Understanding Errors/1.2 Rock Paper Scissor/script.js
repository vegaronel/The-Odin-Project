const buttons = document.querySelectorAll("button");
const resultView = document.getElementById("result");
const currentScore = document.getElementById("score");

let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  console.log(randomNumber);

  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else {
    return "scissor";
  }
}

function getHumanChoice() {
  const choices = ["rock", "paper", "scissor"];
  let choice = prompt("Enter your choice.");
  choice = choice.toLocaleLowerCase();

  if (!choices.includes(choice)) {
    console.log("Invalid choice. Please enter rock, paper or scissor.");
    return getHumanChoice();
  }

  return choice.toLocaleLowerCase();
}

function playRound(computerChoice, humanChoice) {
  console.log(computerChoice, humanChoice);
  if (humanChoice === "rock" && computerChoice === "paper") {
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

function playGame(human) {
  const computerChoice = getComputerChoice();
  const result = playRound(computerChoice, human);
  resultView.textContent = result;
  currentScore.textContent =
    "Human: " + humanScore + " Computer: " + computerScore;
}

buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    playGame(event.target.innerHTML.toLocaleLowerCase());
  });
});

if (humanScore > computerScore) {
  console.log("The winner is: Human");
} else {
  console.log("The winner is: Computer");
}

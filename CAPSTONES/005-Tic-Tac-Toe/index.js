function gameBoard() {
  let board = ["", "", "", "", "", "", "", "", ""];

  const getBoard = () => board;

  const reset = () => {
    board = ["", "", "", "", "", "", "", "", ""];
  };

  const addMark = (player, column) => {
    if (board[column] !== "") {
      return true;
    } else {
      board[column] = player;
      console.log(board);
    }
  };

  return { getBoard, addMark, reset };
}

const startGame = (function () {
  let players = [
    {
      name: "Ronel",
      marker: "X",
    },
    {
      name: "Mika",
      marker: "O",
    },
  ];

  let currentPlayer = players[0];
  const game = gameBoard();

  function checkWinner(board) {
    const winPatterns = [
      // Rows
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // Columns
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // Diagonals
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let pattern of winPatterns) {
      let pos1Val = board[pattern[0]];
      let pos2Val = board[pattern[1]];
      let pos3Val = board[pattern[2]];
      if (pos1Val !== "" && pos1Val === pos2Val && pos2Val === pos3Val) {
        players.includes(pos1Val);
        return pos1Val;
      }
    }
    if (game.getBoard().every((item) => item !== "")) {
      const winner = document.getElementById("winner");
      winner.textContent = "DRAW";
      resetGame();
    }
  }

  const checkPlayer = () => {
    if (currentPlayer === players[1]) {
      currentPlayer = players[0];
    } else {
      currentPlayer = players[1];
    }
  };
  const resetPlayer = () => (currentPlayer = players[0]);
  const getLastPlayer = () => currentPlayer.name;
  const getCurrentPlayer = () =>
    currentPlayer === players[0] ? players[1] : players[0];
  const playGame = (column) => {
    const isOccupied = game.addMark(currentPlayer.marker, column);
    if (isOccupied) return { isOccupied };
    checkPlayer();
    const hasWinnning = checkWinner(game.getBoard());

    return { hasWinnning };
  };

  return {
    playGame,
    getBoard: game.getBoard,
    reset: game.reset,
    getCurrentPlayer,
    resetPlayer,
    getLastPlayer,
  };
})();

function renderBoard() {
  const board = document.getElementById("board");
  const winner = document.getElementById("winner");

  if (winner) {
    winner.textContent = "";
  }
  let html = "";
  for (let i = 0; i < 9; i++) {
    html += `<button id="btn-${i}" onclick="addMarkNewMark(${i})"></button>`;
  }
  board.innerHTML = html;
}

function addMarkNewMark(column) {
  const btn = document.getElementById(`btn-${column}`);
  const playerTurn = document.getElementById("playerTurn");

  const result = startGame.playGame(column);

  if (result.isOccupied) {
    console.log("OCCUPIED");
    return;
  }
  playerTurn.textContent = startGame.getLastPlayer() + "'s turn";
  btn.textContent = startGame.getCurrentPlayer().marker;
  if (result.hasWinnning) {
    const winner = document.getElementById("winner");
    const buttons = document.querySelectorAll(`button[id*="btn-"]`);
    buttons.forEach((button) => {
      button.disabled = true;
    });
    winner.textContent = `Winner is ${result === "O" ? "Mika" : "Ronel"}`;
    resetGame();
  }
}

function resetGame() {
  playerTurn.textContent = "";
  startGame.reset();
  startGame.resetPlayer();
  startGame;
}
renderBoard();

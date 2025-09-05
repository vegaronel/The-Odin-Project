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
      name: "BIBO",
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
    console.log("NO WIN");
    return null; // No winner yet
  }

  const checkPlayer = () => {
    if (currentPlayer === players[1]) {
      currentPlayer = players[0];
    } else {
      currentPlayer = players[1];
    }
  };

  const getCurrentPlayer = () => currentPlayer.marker;
  const playGame = (column) => {
    const isOccupied = game.addMark(currentPlayer.marker, column);
    if (isOccupied) {
      return;
    }
    checkPlayer();
    const hasWinnning = checkWinner(game.getBoard());
    return hasWinnning;
  };

  return {
    playGame,
    getBoard: game.getBoard,
    reset: game.reset,
    getCurrentPlayer,
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
    html += `<button id="btn-${i}" onclick="addMark(${i})"></button>`;
  }
  board.innerHTML = html;
}

function addMark(column) {
  const btn = document.getElementById(`btn-${column}`);
  const board = document.getElementById("board");
  let html = "";
  btn.textContent = startGame.getCurrentPlayer();
  const result = startGame.playGame(column);
  if (result) {
    const winner = document.getElementById("winner");
    const buttons = document.querySelectorAll(`button[id*="btn-"]`);
    buttons.forEach((button) => {
      button.disabled = true;
    });
    winner.textContent = `Winner is ${result}`;
    html += `<button class="reset" onclick="renderBoard()">Reset</button>`;
    document.body.innerHTML += html;
    startGame.reset();
    startGame;
  }
}
renderBoard();

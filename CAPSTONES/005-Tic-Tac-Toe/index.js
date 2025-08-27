function gameBoard() {
  let board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  const getBoard = () => board;

  const putMark = (column, row, player) => {
    if (board[column][row] === 0) {
      board[column][row] = player;
    } else {
      console.log("HEY ITS OCCUPIED");
    }
  };

  const resetGame = () =>
    (board = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);

  return { getBoard, putMark, resetGame };
}

function gameController() {
  const winningPatterns = [
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ],
    // columns
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
    // diagonals
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    [
      [0, 2],
      [1, 1],
      [2, 0],
    ],
  ];

  const player = [
    {
      name: "Player 1",
      marker: "X",
    },
    {
      name: "Player 2",
      marker: "O",
    },
  ];

  let currentPlayer = player[0];

  const game = gameBoard();

  const selectCell = (col, row) => {
    if (isGameOver) return; // stop if game ended
    game.putMark(col, row, currentPlayer.marker);
    if (checkPattern(game.getBoard(), currentPlayer.marker)) {
      const win = document.getElementById("result");
      win.innerHTML = `<h1>${currentPlayer.name} WINS</h1>`;
      isGameOver = true;
      showResetButton();
      return;
    }

    checkPlayer();
  };

  const removeResetButton = () => {
    const btn = document.getElementById("reset-btn");
    if (btn) btn.remove();
  };

  const reset = () => {
    game.resetGame();
    currentPlayer = player[0];
    isGameOver = false;
    document.getElementById("result").innerHTML = "";
    renderBoard(game.getBoard());
    removeResetButton();
  };

  const showResetButton = () => {
    let btn = document.getElementById("reset-btn");
    if (!btn) {
      btn = document.createElement("button");
      btn.id = "reset-btn";
      btn.textContent = "Reset";
      btn.addEventListener("click", reset);
      document.body.appendChild(btn);
    }
  };
  const checkPlayer = () => {
    if (currentPlayer === player[0]) {
      currentPlayer = player[1];
    } else {
      currentPlayer = player[0];
    }
  };

  const checkPattern = (board, player) => {
    for (let pattern of winningPatterns) {
      const values = pattern.map(([row, col]) => board[row][col]);

      if (values.every((cell) => cell === player)) {
        return true;
      }
    }
    return false;
  };

  return { selectCell, board: game.getBoard() };
}
let isGameOver = false;

function renderBoard(board) {
  const container = document.getElementById("board");
  container.innerHTML = "";
  let buttonId = 0;
  board.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      const div = document.createElement("div");
      div.classList.add("cell");
      div.id = `btn-${buttonId}`;
      buttonId++;
      div.textContent = cell === 0 ? "" : cell;

      if (!isGameOver) {
        div.addEventListener("click", () => {
          play.selectCell(rowIndex, colIndex); // use your controller
          renderBoard(play.board); // re-render updated board
        });
      } else {
        div.disabled = true; // disable after win
      }
      container.appendChild(div);
    });
  });
}

const play = gameController();

renderBoard(play.board);

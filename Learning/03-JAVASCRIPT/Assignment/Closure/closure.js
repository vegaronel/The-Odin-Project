function createGame(gameName) {
  let score = 0;

  return function win() {
    score++;
    return `Your game name is ${gameName} and the score is ${score}`;
  };
}

const mobileLegends = createGame("Mobile Legends");

console.log(mobileLegends());

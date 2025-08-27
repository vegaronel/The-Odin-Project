// inheritance using methods and private function

function createUser(name) {
  const userName = `@${name}`;
  let reputation = 0;

  //  by using this method we can make the reputation variable private and cant be access directly
  const getReputation = () => reputation;
  //   prevent accidentally input a wrong data
  const addReputation = () => reputation++;

  return { name, userName, getReputation, addReputation };
}

const firstUser = createUser("Ronel");

firstUser.addReputation();
firstUser.addReputation();

function newPlayer(name) {
  const { getReputation, addReputation } = createUser(name);
  let level = 0;

  const getLevel = () => level;
  const levelUp = () => level++;

  return { getReputation, addReputation, name, getLevel, levelUp };
}

const playerOne = newPlayer("Nagumo Yuichi");

playerOne.levelUp();

console.log(playerOne.getLevel());

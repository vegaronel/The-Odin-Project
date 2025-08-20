function Hero(name, level) {
  this.name = name;
  this.level = level;
}

let hero = new Hero("Biboy", 1);

Hero.prototype.greet = function () {
  return `${this.name} says hello.`;
};

function Warrior(name, level, weapon) {
  Hero.call(this, name, level);
  this.weapon = weapon;
}

Warrior.prototype.attack = function () {
  return `${this.name} attacks with the ${this.weapon}.`;
};

function Healer(name, level, spell) {
  Hero.call(this, name, level);
  this.spell = spell;
}
Healer.prototype.heal = function () {
  return `${this.name} cast ${this.spell}`;
};

const hero1 = new Warrior("Roger", 1, "Ace");
const hero2 = new Healer("Sage", 1, "Cure");

Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

console.log(hero1.greet());
console.log(hero2.greet());
console.log(hero1.attack());

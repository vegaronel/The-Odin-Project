function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      read ? "already read" : "not read yet"
    }`;
  };
}

Book.prototype.sayHello = function () {
  console.log("Say hello prototype!");
};

const theHobbit = new Book("Break a leg", "Ronel", 245, false);

console.log(Object.getPrototypeOf(theHobbit) === Book.prototype);

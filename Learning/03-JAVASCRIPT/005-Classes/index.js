function userDetails(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  Object.defineProperty(this, "age", {
    get() {
      let today = new Date().getFullYear();
      return today - this.birthday.getFullYear();
    },
  });
}

const user = new userDetails("Ronel", new Date(2000, 11, 28));

console.log(user.age);
console.log(user.birthday);

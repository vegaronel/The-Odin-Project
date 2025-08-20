const container = document.getElementById("container");

const redText = document.createElement("p");
const blueh3 = document.createElement("h3");
const firstDiv = document.createElement("div");
const firstH1 = document.createElement("h1");
const secondP = document.createElement("p");
const btn = document.getElementById("click");

redText.textContent = "Hey I'm Red!";
blueh3.textContent = "I'm a blue h3!";
firstDiv.style = "border: black solid 1px; background-color: pink;";
firstH1.textContent = "I'm in a div";
secondP.textContent = "ME TOO";

container.appendChild(redText);
container.appendChild(blueh3);
firstDiv.appendChild(firstH1);
firstDiv.appendChild(secondP);
container.append(firstDiv);

const buttons = document.querySelectorAll("button");

buttons.forEach((button, e) => {
  button.addEventListener("click", function (event) {
    console.log(event.target);
  });
});

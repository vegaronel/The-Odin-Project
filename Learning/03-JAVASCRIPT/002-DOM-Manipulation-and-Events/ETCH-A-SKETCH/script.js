window.addEventListener("load", (event) => {
  const container = document.getElementById("container");
  const changeGridButton = document.getElementById("changeGridButton");

  function createDiv(n) {
    container.innerHTML = "";
    const gridSize = 98;
    const pixelSize = gridSize / n;

    for (let i = 0; i < n * n; i++) {
      const pixel = document.createElement("div");
      pixel.classList.add("pixel");
      pixel.style = `
          background-color: white;
          border: 1px solid black;
          width: ${pixelSize}vh;
          height: ${pixelSize}vh;
          display: inline-block;
          box-sizing: border-box;
        `;

      // event listener
      pixel.addEventListener("mouseover", () => {
        pixel.style.backgroundColor = createRandomColor();
      });

      container.appendChild(pixel);
    }
  }
  createDiv(16);

  changeGridButton.addEventListener("click", () => {
    let newGridSize = prompt("Enter a new grid size between (1 - 100):");
    if (newGridSize > 0 && newGridSize <= 100) {
      createDiv(newGridSize);
    } else {
      alert("Please enter a valid number between 1 and 100.");
    }
  });
});

function createRandomColor() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);

  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  return bgColor;
}

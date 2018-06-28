const grid = document.querySelector("#container-grid");
const resetGrid = document.querySelector("#reset-btn");
let gridSize = 16;

resetGrid.addEventListener("click", function() {
    clearGrid();
    buildNewGrid();
});

buildGrid(gridSize);

//repaints grid background white
function clearGrid() {
    let gridElements = document.getElementsByClassName("grid-div");
    for (let i = 0; i < gridElements.length; i++) {
        gridElements[i].style.backgroundColor = "lightgrey";
    }
}

//builds a grid
function buildGrid(num) {
    let gridElements = document.getElementsByClassName("grid-div");
    let totalDivs = num * num;
    let divSize = 550 / num;

    while (gridElements[0]) {
        gridElements[0].parentNode.removeChild(gridElements[0]);
    }

    for (let i = 0; i < totalDivs; i++) {
        let divElement = document.createElement("div");
        divElement.className = "grid-div";
        divElement.style.height = divSize + "px";
        divElement.style.width = divSize + "px";
        divElement.addEventListener("mouseover", function (e) {
            e.target.style.backgroundColor = randomBlue();
        });
        grid.appendChild(divElement);
    }
}

//builds a new grid with a new size
function buildNewGrid() {
    let sizeValue = prompt("Enter a number between 1 and 100");
    while (isNaN(sizeValue) || sizeValue < 1 || sizeValue > 100) {
        sizeValue = prompt("That is not a number between 1 and 100, try again:");
    }
    gridSize = sizeValue;
    buildGrid(gridSize);
}

//generates a random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  //generates a shade of blue
  function randomBlue() {
    return "rgb(0, 0, " + (Math.floor(Math.random() * 255)) + ")";
}
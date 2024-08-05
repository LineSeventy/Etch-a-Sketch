function random(max) {
    return Math.floor(Math.random() * (max + 1));
}

function createGrid(size) {
    let parentDiv = document.querySelector("#container");
    parentDiv.innerHTML = '';
    for (let x = 0; x < size; x++) {
        let grid = document.createElement("div");
        grid.className = "grid-item";
        grid.addEventListener("mouseover", () => {
            const rndColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
            grid.style.backgroundColor = rndColor;
        });
        parentDiv.appendChild(grid);
    }
}


createGrid(256);

let gridAsk = document.querySelector(".gridAsk");
gridAsk.addEventListener("click", () => {
    let ans = prompt("Enter a Number the Limit is (100)");   
    let gridSize = parseInt(ans);
    gridSize = gridSize + gridSize;
    if (!Number.isInteger(gridSize) || gridSize <= 0 ||gridSize > 100) {
        alert("Enter a valid positive number and Don`t go above 100");
        return;
    }
    createGrid(gridSize);
});

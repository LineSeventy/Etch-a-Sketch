for (let x = 0; x < 256; x++) {
    let parentDiv = document.querySelector("#container");
    let grid = document.createElement("div");
    grid.className = "grid-item";
    parentDiv.appendChild(grid);
}
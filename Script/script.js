function random(max) {
    return Math.floor(Math.random() * (max + 1));
}
for (let x = 0; x < 256; x++) {
    let parentDiv = document.querySelector("#container");
    let grid = document.createElement("div");
    grid.className = "grid-item";
    grid.addEventListener("mouseover", () => {
        const rndColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        grid.style.backgroundColor = rndColor;
    });
     
    parentDiv.appendChild(grid);
}


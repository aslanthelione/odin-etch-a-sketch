const grid = document.querySelector(".grid");
const button = document.querySelector("button");
const tileStyling= document.querySelector("#tile-styling");

function generateGrid(gridX, gridY) {
  grid.replaceChildren();

  for (let y = 0; y < gridY; y++) {
    for (let x = 0; x < gridX; x++) {
      const div = document.createElement("div");
      div.classList.add("tile");
      div.setAttribute("x",x);
      div.setAttribute("y",y);
      grid.appendChild(div);
    }
  }

  tileStyling.textContent = `.tile{width:${100 / gridX}%`;
}

button.addEventListener("click", () => {
  console.log("click amonugs")
  const newX = Math.min(parseInt(prompt("New grid x:", )) ?? 16, 100);
  const newY = Math.min(parseInt(prompt("New grid y:", )) ?? 16, 100);

  generateGrid(newX, newY);
});

grid.addEventListener("mouseover", e => {
  console.log("mouseOver")
  if (e.target.classList.contains("tile")) {
    e.target.classList.add("painted");
  }
});

generateGrid(16, 16);
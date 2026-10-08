const GRID_SIZE = 960;
const GRID_X = 16;
const GRID_Y = 16;

const grid = document.querySelector(".grid");

const styleSheet = document.createElement("style");
styleSheet.textContent = `.tile{width:${100/GRID_X}%;height: ${100 / GRID_Y}%;}`;
document.head.appendChild(styleSheet);

for (let i = 0; i < GRID_X * GRID_Y; i++) {
  const div = document.createElement("div");
  div.classList.add("tile");
  grid.appendChild(div);
}

grid.addEventListener("mouseover", e => {
  console.log("mouseOver")
  if (e.target.classList.contains("tile")) {
    e.target.classList.add("painted");
  }
});
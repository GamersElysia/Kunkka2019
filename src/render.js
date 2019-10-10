export const render = ({map, kunkka}, root) => {
  for (let x = 0; x < map.width; x++) {
    for (let y = 0; y < map.height; y++) {
      const element = document.createElement("div");
      if (map.islands.has(x, y)) {
        element.classList.add("island");
      }
      if (x == kunkka.x && y == kunkka.y) {
        element.classList.add("kunkka");
      }

      root.appendChild(element);
    }
  }
};

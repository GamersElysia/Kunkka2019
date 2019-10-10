import { PairSet, PairPool } from "./util";
import { render } from "./render";

const map = {
  width: 16,
  height: 10
};

const pairPool = new PairPool(map.width, map.height);

const kunkkaStart = pairPool.take();
const kunkka = {
  x: kunkkaStart[0],
  y: kunkkaStart[1]
}

const createIslandSet = (islandsToAdd, width, height, pairPool) => {
  const set = new PairSet();
  for (let i = 0; i < islandsToAdd; i++) {
    const [x, y] = pairPool.take();
    set.add(x, y);
  }

  return set;
};

map.islands = createIslandSet(8, map.width, map.height, pairPool);

const scene = {map, kunkka}

render(scene, document.getElementById("root"));

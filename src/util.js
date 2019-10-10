export class PairSet {
  constructor() {
    this.set = new Set();
  }

  add(x, y) {
    return this.set.add(`${x},${y}`);
  }

  has(x, y) {
    return this.set.has(`${x},${y}`);
  }
}

function shuffle(array) {
  for (let i = 0; i < array.length; i++) {
    const swapIndex = i + Math.floor(Math.random() * (array.length - i));
    const temp = array[swapIndex];
    array[swapIndex] = array[i];
    array[i] = temp;
  }
}

export class PairPool {
  constructor(x, y) {
    this.pool = [];

    for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {
        this.pool.push([i, j]);
      }
    }

    shuffle(this.pool)
  }

  take() {
    if (this.pool.length == 0) throw new Error("Pool is empty.");

    return this.pool.pop();
  }
}
